import * as React from "react"
import {Link} from "gatsby";
import { graphql } from "gatsby";
import Learn from "../images/learn.svg";
import Layout from "../components/layout";
import { FiFileText, FiArrowRight } from "react-icons/fi";

const LearnPage = ({data}) => {
  // const pages = data.allSitePage.nodes
  // console.log(pages);
  const pages = [
    ...data.allSitePage.nodes.filter(({path}) => (path === '/docs/data-documentation/' || path === '/docs/introduction-to-glowpa/')),
    ...data.allSitePage.nodes.filter(({path}) => (path !== '/docs/data-documentation/' && path !== '/docs/introduction-to-glowpa/'))
]
  return (
    <Layout>
        <div className="container mx-auto flex flex-col sm:px-6 mb-20 mt-36">
  <div className="flex flex-col-reverse items-start md:flex-row md:justify-between md:items-center mb-16 mx-4 ">
      <div className="flex flex-col pt-12">
        
        <span class="font-header text-green-500 font-extrabold text-xl"><Link to='/'>WATERPATH TOOLKIT</Link></span>
        <span className="font-body text-blue-500 font-extralight text-[7.5rem] leading-none tracking-tight -ml-[10px]">
          Learn
        </span>
      <p className="font-body text-blue-500 mt-6 md:max-w-[80%] font-medium">This section provides a curated set of materials to help you navigate the tools and concepts of the WaterPath Toolkit. Whether you're interested in exploring the GloWPa model, understanding the structure of our input and output datasets, or applying the tools to your own analytical needs, these resources are designed to support both newcomers and experienced professionals. Our goal is to make the connection between data, models, and insights as transparent and reproducible as possible.</p>
      </div>
      <div className="hidden md:flex h-[250px]">
        <Learn />
      </div>
    </div>
    <div className={`mt-12 w-full grid md:grid-cols-3 gap-4`}>
    <div className={`md:col-span-2 font-body text-blue-500`}>
    <h3 className="font-header mb-8 text-2xl text-blue-500 font-bold">Learning resources</h3>
    <p className="font-body text-blue-500 mb-6 text-sm font-medium">Below you can find a set of practical resources that can help you:<br/>a. get started with using the WaterPath Toolkit.<br/>b. explore different themes of waterborne pathogen modelling using open data and software.</p>
    <div className="grid md:grid-cols-2 gap-4 grid-flow-row-dense">
    {(pages.filter((p) => p.path.indexOf('/data') === -1 ).map((p, i) => {
  return <div>
    <Link to={p.path} className={"block group w-full hover:text-blue-300 text-lg line-clamp-2 align-middle p-6 rounded-lg shadow-sm bg-white border hover:border-sand-100" }>
    <div className="relative"><div className="absolute top-0 right-0"></div>
      <h5 className="font-bold tracking-tight text-blue-500 flex items-center"><span className="mr-2"><FiFileText/></span><span className="group-hover:underline mr-1">{p.pageContext.title}</span><FiArrowRight className="text-sand-100 group-hover:text-blue-500"/></h5>
      </div>
    </Link>

  </div>
})
)}
</div>
      </div>

      <div className=" bg-sand-500 rounded-2xl p-10">
        <h3 className="font-header mb-6 text-2xl text-blue-500 font-bold">Data documentation</h3>
        <p className="font-body text-blue-500 mb-8 text-sm font-medium">Alongside practical documentation, you can find guidance on data sources we use, as well as how these are used and analyzed for modelling purposes.</p>
        <div className={`grid`}>
      {(pages.filter((p) => p.path.indexOf('/data') !== -1 ).map((p, i) => {
  return <div>
    <Link to={p.path} className={"block group mb-6 w-full hover:text-blue-300 text-lg line-clamp-2 align-middle p-6 rounded-lg shadow-sm bg-white border hover:border-sand-100" }>
    <div className="relative"><div className="absolute top-0 right-0"></div>
      <h5 className="font-bold tracking-tight items-center group-hover:underline flex flex-row"><span className="mr-2"><FiFileText className="text-blue-500"/></span><span className="text-blue-500 mr-1">{p.pageContext.title}</span><FiArrowRight className="text-sand-100 group-hover:text-blue-500"/></h5>
      </div>
    </Link>
  </div>
})
)}
      </div>
      </div>
    </div>
    
    </div>
      </Layout>
  )
}

export default LearnPage

export const Head = () => <title>WaterPath Toolkit - Learn</title>


export const query = graphql`
  query PagesWithDocsInSlug {
    allSitePage(filter: { path: { regex: "/docs/" } }) {
      nodes {
        path
        pageContext
      }
    }
  }
`