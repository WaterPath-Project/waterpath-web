import * as React from "react"
import Learn from "../images/learn.svg";
import Model from "../images/model.svg";
import Explore from "../images/explore.svg";
import khulna from "../images/khulna.png";
import makerere from "../images/makerere.png";
import venthic from "../images/venthic.png";
import wur from "../images/wur.png";
import { FiGithub, FiGitlab, FiGlobe } from "react-icons/fi";


const links = [
  {
    text: "Learn",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "Model",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Explore",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "About",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  }
]

const IndexPage = () => {
  return (
    <main className="bg-back-white">
      

  <nav className="fixed w-full z-20 top-0 pt-10 start-0 bg-back-white ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 text-sm border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          { links.map((link) => { return <li>
            <a href={link.url} className="block px-3 font-body font-semibold text-blue" aria-current="page">{link.text}</a>
          </li>})}
        </ul>
      </div>
      <a href="/" className="flex items-center space-x-3">
          <h1 className="text-blue font-header text-4xl tracking-wider font-bold"><span className="mr-0.5 text-green">Water</span>Path</h1>
      </a>
      <div className="flex space-x-3 md:space-x-4">
          <a href="https://git.wur.nl/glowpa/glowpa-model" className="text-blue ms-16 text-xl"><FiGitlab/></a>
          <a href="https://github.com/WaterPath-Project" className="text-blue ms-16 text-xl"><FiGithub/></a>
          <a href="https://www.waterpathogens.org" target="_blank" className="text-blue ms-16 text-sm font-body font-bold underline">waterpathogens.org</a>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        
      </div>
    </div>
  </nav>
  <div className={"mt-36 w-full bg-hero2 bg-no-repeat container mx-auto"}>
      <div className="relative text-center pt-20 pb-20">
        <h2 className="text-4xl text-white drop-shadow font-body font-thin">Modelling future screnarios<br/>for waterborne infectious diseases</h2>
        <button type="button" class="absolute font-black left-1/2 transform -translate-x-1/2 bottom-0 text-blue font-body font-extrabold bg-green focus:ring-4 focus:ring-blue-500 rounded-md text-sm px-5 py-2.5">More about WaterPath</button>
      </div>
      <div className="mt-12 grid md:grid-cols-3 sm:grid-cols-1 gap-24">
        <div className="flex-column p-4">
          <div className="h-36">
            <Learn className="absolute"/>
          </div>
            <h3 className="mt-8 text-3xl font-header font-bold text-blue">Learn</h3>
            <p className="mt-6 font-body text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor diam, varius id aliquet vitae, cursus non velit. Fusce in tortor quis sem dictum feugiat. Vivamus id turpis pharetra, pulvinar augue in, dapibus leo. Donec pharetra, turpis vel mollis congue, mi dui convallis arcu, ut volutpat nibh lacus id sapien. 
            </p>
            <br/>
            <a href="#" className="button font-black text-white font-body bg-blue focus:ring-4 focus:ring-blue-500 rounded-md text-xs px-5 py-2.5">Introduction to Pathogen Modelling</a>
            <br/><br/>
            <a href="#" className="button font-black text-blue font-body bg-sand focus:ring-4 focus:ring-blue-500 rounded-md text-xs px-5 py-2.5">Data Dictionary</a>
        </div>
        <div className="flex-column p-4">
          <div className="h-36 relative">
            <Model className="absolute bottom-0"/>
          </div>
          <h3 className="mt-8 text-3xl font-header font-bold text-blue">Model</h3>
            <p className="mt-6 font-body text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor diam, varius id aliquet vitae, cursus non velit. Fusce in tortor quis sem dictum feugiat. Vivamus id turpis pharetra, pulvinar augue in, dapibus leo. Donec pharetra, turpis vel mollis congue, mi dui convallis arcu, ut volutpat nibh lacus id sapien. 
            </p>
            <br/>
            <a href="https://git.wur.nl/glowpa/glowpa-model" className="button font-black text-white font-body bg-blue focus:ring-4 focus:ring-blue-500 rounded-md text-xs px-5 py-2.5">Get the model</a>
            <br/><br/>
            <a href="#" className="button font-black text-blue font-body bg-sand focus:ring-4 focus:ring-blue-500 rounded-md text-xs px-5 py-2.5">Modelling Guidelines</a>
        
        </div>
        <div className="flex-column p-4">
          <div className="h-36 relative">
            <Explore className="absolute bottom-0"/>
          </div>
          <h3 className="mt-8 text-3xl font-header font-bold text-blue">Explore</h3>
            <p className="mt-6 font-body text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor diam, varius id aliquet vitae, cursus non velit. Fusce in tortor quis sem dictum feugiat. Vivamus id turpis pharetra, pulvinar augue in, dapibus leo. Donec pharetra, turpis vel mollis congue, mi dui convallis arcu, ut volutpat nibh lacus id sapien. 
            </p>
            <br/>
            <button disabled className="button font-black text-dead-grey-2 font-body bg-dead-grey focus:ring-4 focus:ring-blue-500 rounded-md text-xs px-5 py-2.5">Access the Global map</button>
            <br/><br/>
            <button disabled className="button font-black text-dead-grey-2 font-body bg-dead-grey focus:ring-4 focus:ring-blue-500 rounded-md text-xs px-5 py-2.5">View case studies</button>
        
        </div>
        
      </div>
      </div>
      <div class="footer mt-32 bg-sand static bottom-0 left-0 w-full">
        <div className={"pt-24 w-full container mx-auto"}>
            <h4 className="font-body text-sand-grey uppercase font-bold">Partners</h4>
            <div className="md:grid-cols-4 grid gap-24">
              <div className="flex-column mx-auto self-center"><img style={{width: "100%"}} src={wur}/></div>
              <div className="flex-column mx-auto self-center"><img  style={{height: "105px", width: "auto"}} src={khulna}/></div>
              <div className="flex-column mx-auto self-center"><img  style={{height: "115px", width: "auto"}} src={makerere}/></div>
              <div className="flex-column mx-auto self-center"><a href="https://www.venthic.com"><img style={{height: "28px", width: "auto"}} src={venthic}/></a></div>
            </div>
            <div className="pb-12 mt-12">
              <h4 className="font-body text-sand-grey uppercase font-bold">Funded by</h4>
              <p className="mt-6 font-body text-sm">The WaterPath Toolkit has received funded by the Wellcome Trust Foundation (Grant ref.: 226078/Z/22/Z).</p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>WaterPath Toolkit</title>
