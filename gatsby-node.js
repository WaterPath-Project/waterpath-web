const path = require("path")
const fs = require("fs")

const loadCategoryIcons = () => {
  const categoriesPath = path.resolve(__dirname, "external-repos/waterpath-learning-materials/data/categories.json")
  const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"))
  const categoryIcons = new Map()

  for (const category of categories) {
    categoryIcons.set(category.machine_name, category.icon)
    for (const subcategory of category.subcategories || []) {
      categoryIcons.set(subcategory.machine_name, subcategory.icon)
    }
  }

  return categoryIcons
}

const getSchemaSubcategory = filename => {
  const name = path.basename(filename, path.extname(filename))

  if (name.startsWith("human_emissions")) {
    if (name.includes("sanitation")) return "sanitation"
    if (name.includes("treatment")) return "wastewater_treatment"
    return "population"
  }

  if (name.includes("production_systems")) return "production_systems"
  if (name.includes("manure")) return "manure_management"
  return "livestock_population"
}

toJsonSchema = (tableData) => {
  var props = {}
  for ( var f in tableData['fields'] ) {
    const propName = tableData['fields'][f].name
    props[propName] = tableData['fields'][f]
    delete props[propName].name
    if (props[propName].hasOwnProperty('float_number')) {
      props[propName]['type'] = 'number'
      delete props[propName].float_number
    }
    if (props[propName]['type'] === 'integer') {
      props[propName]['type'] = 'number'
    }
    if (props[propName].hasOwnProperty('constraints')) {
      if (props[propName]['constraints'].hasOwnProperty('minimum')) {
        props[propName]['minimum'] = props[propName]['constraints']['minimum']
      }
      
      if (props[propName]['constraints'].hasOwnProperty('maximum')) {
        props[propName]['maximum'] = props[propName]['constraints']['maximum']
      }
      
      delete props[propName].constraints
    }
    
    if (props[propName].hasOwnProperty('categories')) {
      props[propName]['enum'] = props[propName]['categories']
      delete props[propName.categories]
    }
  }
  tableData['$schema'] = "https://json-schema.org/draft/2020-12/schema";
  tableData['properties'] = props;
  tableData['type'] = 'object';
  return tableData
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    const repo = fileNode.sourceInstanceName
    const name = path.basename(fileNode.relativePath, path.extname(fileNode.relativePath))

    createNodeField({ node, name: "repo", value: repo })
    createNodeField({ node, name: "docName", value: name })
    createNodeField({ node, name: "toc", value: fileNode.tableOfContents })
  }
  if (node.internal.type === "JsonSchema") {
    createNodeField({node, name: "schema", value:node.data})
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          tableOfContents
          fields {
            repo
            docName
          }
        }
      }
    }
  `)

  const schema_result = await graphql(`
  {
    allJsonSchema {
      edges {
        node {
          data {
            title
            description
            raw
          }
          filename
        }
      }
    }
  }
  `)

  const schemaCategoryOrder = ["human_emissions", "livestock"]
  const sortedSchemaData = [...schema_result.data.allJsonSchema.edges].sort((left, right) => {
    const categoryIndex = schema => schemaCategoryOrder.findIndex(category =>
      path.basename(schema.node.filename).startsWith(category)
    )
    const leftCategory = categoryIndex(left)
    const rightCategory = categoryIndex(right)

    if (leftCategory !== rightCategory) {
      return leftCategory - rightCategory
    }

    return left.node.data.title.localeCompare(right.node.data.title)
  })
  
  const package_result = await graphql(`
  {
    allDataPackage {
      edges {
        node {
          data {
            title
            description
            parent
            icon
            license {
              path
              name
              title
            }
            source {
              title
              path
            }
          }
        }
      }
    }
    allFile(filter: {
      sourceInstanceName: {eq: "waterpath-learning-materials"}
      relativeDirectory: {eq: "data/figures"}
    }) {
      nodes {
        base
        publicURL
      }
    }
      }
  `)

  const iconUrls = new Map(package_result.data.allFile.nodes.map(file => [file.base, file.publicURL]))
  const categoryIcons = loadCategoryIcons()
  const schemaData = sortedSchemaData.map(({ node }) => ({
    node: {
      ...node,
      data: {
        ...node.data,
        iconUrl: iconUrls.get(categoryIcons.get(getSchemaSubcategory(node.filename))) || null,
      },
    },
  }))
  const packageData = package_result.data.allDataPackage.edges.map(({ node }) => ({
    node: {
      ...node,
      data: {
        ...node.data,
        iconUrl: iconUrls.get(node.data.icon) || null,
      },
    },
  }))

  // const notebook_result = await graphql(`
  // {
  //   query
  //   JupyterQuery {
  //     allJupyterNotebook {
  //       edges {
  //         node {
  //           id
  //           metadata {
  //             kernelspec {
  //               name
  //               language
  //               display_name
  //             }
  //           }
  //           html
  //           json {
  //             nbformat
  //             nbformat_minor
  //             cells {
  //               cell_type
  //               execution_count
  //             }
  //           }
  //           internal {
  //             content
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // `)

  const template = path.resolve("./src/templates/doc.js")

  // createPage({
  //   path: '/docs/data-documentation',
  //   slug: '/docs/data-documentation',
  //   component: dataIntroTemplate,
  //   context: {
  //     id: 'data-documentation',
  //     title: 'Data documentation',
  //     schemaData: [],
  //     packageData: []
  //   },
  // })

  // result.data.allJupyterNotebook.nodes.forEach( node => {
  //   const slug = `/docs/${node.id}`
  //   console.log(slug)
  // })

  result.data.allMarkdownRemark.nodes.forEach(node => {
    const slug = `/docs/${node.fields.repo}/${node.fields.docName}`
    // if (node.fields.docName !== 'LICENSE') {
    //   createPage({
    //     path: slug,
    //     component: template,
    //     context: {
    //       id: node.id,
    //       schemaData: [],
    //     },
    //   })
    if (node.fields.repo ==='waterpath-learning-materials' && node.fields.docName === 'Data documentation') {
      createPage({
        path: '/docs/data-documentation',
        slug: slug,
        component: template,
        context: {
          id: node.id,
          title: 'Data documentation',
          schemaData: [],
          packageData: []
        },
      })
    }
    if (node.fields.repo ==='waterpath-learning-materials' && node.fields.docName === 'GloWPa intro') {
      createPage({
        path: '/docs/introduction-to-glowpa',
        slug: slug,
        component: template,
        context: {
          id: node.id,
          title: 'Introduction to GloWPa',
          schemaData: [],
          packageData: []
        },
      })
    }
      if (node.fields.repo == 'glowpa' && node.fields.docName == 'README') {
        createPage({
          path: '/docs/modelling-guidelines',
          slug: slug,
          component: template,
          context: {
            id: node.id,
            title: 'Modelling guidelines',
            schemaData: [],
            packageData: []
          },
        })
      }
      if (node.fields.repo == 'glowpa' && node.fields.docName == 'waterpath') {
        createPage({
          path: '/docs/example-dataset',
          slug: slug,
          component: template,
          context: {
            id: node.id,
            title: 'GloWPa: Example dataset run',
            schemaData: [],
            packageData: []
          },
        })
      }
      if (node.fields.repo == 'glowpa' && node.fields.docName == 'jmp_waterpath') {
        createPage({
          path: '/docs/jmp-data',
          slug: slug,
          component: template,
          context: {
            id: node.id,
            title: 'Processing JMP data',
            schemaData: [],
            packageData: []
          },
        })
      }
      if (node.fields.repo.indexOf('waterpath-data-schemas') !== -1 && node.fields.docName == 'WEB') {
        
        createPage({
          path: '/docs/data-explanation',
          slug: slug,
          component: template,
          context: {
            id: node.id,
            title: 'Data explanation',
            schemaData,
            packageData: []
          },
        })
      }
      
      if (node.fields.repo ==='waterpath-data' && node.fields.docName == 'WEB') {
        
        createPage({
          path: '/docs/data-sources',
          slug: slug,
          component: template,
          context: {
            id: node.id,
            title: 'Data sources',
            schemaData: [],
            packageData,
          },
        })
      }
    
  })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const schemaDir = path.resolve(__dirname, "external-repos/waterpath-data-schemas")
  const schemaFiles = fs.readdirSync(schemaDir)
  const categoryIcons = loadCategoryIcons()
  
  const sourcesDir = path.resolve(__dirname, "external-repos/waterpath-data")
  const sourceFiles = fs.readdirSync(sourcesDir, {recursive: true})

  for (const file of schemaFiles) {
    if (path.extname(file) === ".json") {
      const schemaPath = path.join(schemaDir, file)
      const schemaRaw = fs.readFileSync(schemaPath, "utf-8")
      const schemaData = JSON.parse(schemaRaw)
      // const test = toJsonSchema(schemaData);
      createNode({
        id: createNodeId(`${file}-schema`),
        parent: null,
        children: [],
        internal: {
          type: "JsonSchema",
          contentDigest: createContentDigest(schemaData)
        },
        filename: schemaPath,
        data: {
          title: schemaData['title'],
          description: schemaData['description'],
          raw: JSON.stringify(toJsonSchema(schemaData))
        }
      })
    }
  }

  for (const file of sourceFiles) {
    if (file.indexOf( "datapackage.json") !== -1) {
      const packagePath = path.join(sourcesDir, file)
      const parent = path.basename(path.dirname(file))
      const rawPackage = fs.readFileSync(packagePath, "utf-8")
      const package = JSON.parse(rawPackage)
      const categoryName = package.keywords
        ?.find(keyword => keyword.startsWith("waterpath:"))
        ?.slice("waterpath:".length)
      const icon = categoryIcons.get(categoryName) || categoryIcons.get(`${categoryName}_emissions`) || null

      createNode({
        id: createNodeId(`${file}-schema`),
        parent: null,
        children: [],
        internal: {
          type: "DataPackage",
          contentDigest: createContentDigest(package)
        },
        filename: packagePath,
        data: {title: package['title'],
          description: package['description'],
          license: package['licenses'],
          source: package['sources'],
          parent: parent,
          icon: icon,
        }
      })
    }
  }
}


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          // test: /\.(png|jpe?g|gif|pdf|woff2?|ttf|eot|mp4|webm|riv|svg)$/,
          test: /\.(riv)$/,
          type: 'asset/resource', // Replaces file-loader in modern Webpack
          include: [
            path.resolve(__dirname, "external-repos/waterpath-data-integration-tool")
          ],
          exclude: [
            path.resolve(__dirname, "src")
          ],
          generator: {
            filename: 'static/[name]-[hash][ext]',
          },
        },
      ],
    },
  });
};