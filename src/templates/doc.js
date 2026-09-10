import React, { useState } from "react";
import Layout from "../components/layout";
import TOC from "../components/toc"
import { graphql, useStaticQuery } from "gatsby";
import { JsonSchemaViewer } from "@stoplight/json-schema-viewer";
import "@stoplight/mosaic/styles.css";
import "@stoplight/mosaic/themes/default.css";
import Learn from "../images/learn.svg";
import { Link } from "gatsby";
import { FiArrowRight } from "react-icons/fi";


const DocPage = ({ data, pageContext }) => {

  const [selectedSchema, setSelectedSchema] = useState(0)
  const schemas = pageContext.schemaData
  const schemasThere = schemas.length > 0
  const packages = pageContext.packageData
  const packagesThere = packages.length > 0
  const repo = (data.markdownRemark.fields.repo.indexOf('waterpath-') !== -1) ? 'https://github.com/WaterPath-Project/'+data.markdownRemark.fields.repo:'https://git.wur.nl/glowpa/'
  const date = new Date(data.site.buildTime)
  return (
    <Layout>
      <div className="px-4 sm:px-6 doc-page mx-auto mb-20 mt-32">
      <div className="flex flex-col-reverse items-start md:flex-row md:justify-between md:items-end mb-16 mx-4 ">
      <div className="flex flex-col">
        <span class="font-header text-green-500 font-extrabold text-xl xs:mt-24"><Link to='/'>WATERPATH TOOLKIT</Link> / <Link to='/learn'>LEARN</Link></span>
        <span className="font-body text-blue-500 font-extralight xs:text-[3rem] sm:text-[5.5rem] leading-none tracking-tight -ml-[10px]">
          {pageContext.title}
        </span>

        <div>
          
        </div>
      </div>
      <div className="hidden md:flex h-[200px] mt-12">
        <Learn />
        
      </div>
    </div>
    <a href={repo} target="_blank" class="float-right mb-6 text-sm p-6 bg-white rounded-lg">

      <span class="mb-2 text-sm font-bold tracking-tight text-blue-500"><a href={repo}>Visit source repository</a></span>
      <p class="font-bold text-xs text-gray-500 dark:text-gray-400">Last update: {date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</p>
    </a>
        <div className={`sm:mt-6 md:mt-36 w-full grid grid-flow-row-dense mx-auto font-body text-blue-500  ${!schemasThere && !packagesThere && "md:grid-cols-3 gap-4"}`}>
          {(!schemasThere && !packagesThere) && <TOC content={data.markdownRemark.tableOfContents}/>}
          <div className={`main-content font-body text-blue-500 font-medium ${!schemasThere && !packagesThere && "md:col-span-2"}`} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
        {schemasThere && (
          <>
            <p className="mt-12 font-body text-blue-500 font-medium">Navigate the documented data properties by clicking on each schema below: </p>
            <div className="mt-12 w-full grid grid-flow-row-dense md:grid-cols-4 gap-4 mx-auto">

              {(schemas.map((schema, i) => {
                const data = JSON.parse(schema.node.data.raw)
                return <div key={schema.node.filename} className={`bg-wpGray-100 rounded-2xl p-10 flex ${i === selectedSchema ? "ring-2 ring-green-500" : ""}`}>
                  <button type="button" onClick={() => setSelectedSchema(i)} className="w-full flex items-center justify-between gap-6 text-left">
                    <h5 className="font-bold tracking-tight text-blue-500">{data.title}</h5>
                    {schema.node.data.iconUrl && <img src={schema.node.data.iconUrl} alt="" className="w-12 h-12 shrink-0 object-contain" />}
                  </button>
                </div>
              })
              )}


            </div>
            <div id="viewer" className="mt-24 w-full mx-auto font-body font-medium">
              <pre>
                <JsonSchemaViewer
                  name="Schema viewer"
                  schema={JSON.parse(schemas[selectedSchema].node.data.raw)}
                  expanded={true}
                  hideTopBar={false}
                  emptyText="No schema defined"
                  defaultExpandedDepth={2}
                />
              </pre>
            </div>
          </>
        )}
        {packagesThere && (
          <>
          <div className="mt-12 w-full  mx-auto">

{(packages.map((p, i) => {
  data = p.node.data
  return <div>
    <a href={'https://github.com/WaterPath-Project/waterpath-data/tree/main/'+data.parent+''} className={"block group mb-6 w-full pt-8 text-lg line-clamp-2 align-middle p-6 rounded-lg shadow-sm bg-white border hover:border-sand-100" }>
    <div className="relative pr-20">
      {data.iconUrl && <img src={data.iconUrl} alt="" className="absolute top-0 right-0 w-14 h-14 object-contain" />}
      <h5 className="font-bold tracking-tight text-blue-500 flex flex-row items-center"><span className="group-hover:underline mr-1">{data.title}</span> <FiArrowRight className="text-sand-500 group-hover:text-blue-500"/></h5>
      <p className="font-body text-blue-500 text-sm font-medium">{data.description}</p>
      </div>
      <div className="flex justify-between relative">
      <div className="pt-5 text-sand-700 text-xs">
        <span className="font-bold">Sources:</span> <ul>{data.source.map((s) => {return <li><a target="_blank" className="font-medium" href={s.path} target="_blank">{s.title}</a></li>})}</ul>
        </div>

        </div>
    </a>
  </div>
})
)}
</div>
          </>
        )}
      </div>
    </Layout>
  )
}


export const query = graphql`
  query MarkdownById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      fields {
        docName
        repo
      }
    }
    site {
      buildTime
    }
  }
`


export default DocPage

export const Head = () => <title>WaterPath Toolkit</title>
