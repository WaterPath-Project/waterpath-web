const fs = require("fs")
const path = require("path")

const externalRepoPaths = fs.readdirSync("./external-repos").map(repo =>
  path.resolve(`./external-repos/${repo}`)
)

module.exports = {
  pathPrefix: 'waterpath-web',
  siteMetadata: {
    title: `WaterPath Web`,
    siteUrl: `https://waterpath-project.github.io/`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-typescript", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: 'gatsby-plugin-alias-imports',
    options: {
      alias: {
        '@': path.resolve(__dirname, 'external-repos/waterpath-data-integration-tool/src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-plugin-svgr-loader',
    options: {
      path: "./src/images"
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
        resolve: `gatsby-remark-autolink-headers`,
        options: {
          icon: false, // or use an icon
        },
      },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        {
          resolve: `gatsby-remark-copy-linked-files`,
          options: {
            ignoreFileExtensions: [],
          },
        },
      ],
    }
  }, ...externalRepoPaths.map(repoPath => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        name: path.basename(repoPath),
        path: repoPath,
      },
    })),
  ],
}