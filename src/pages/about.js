import * as React from "react"
import Learn from "../images/learn.svg";
import Model from "../images/model.svg";
import Explore from "../images/explore.svg";
import { StaticImage } from "gatsby-plugin-image";
import { FiGithub, FiGitlab, FiGlobe } from "react-icons/fi";


const links = [
  {
    text: "About",
    url: "/about"
  }
]

const IndexPage = () => {
  return (
    <main className="bg-back-white">
      

  <nav className="fixed w-full z-20 top-0 pt-10 start-0 bg-back-white ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" id="navbar-sticky">
      
      <div className="lg:flex relative max-lg:fixed max-lg:w-1/2 max-lg:top-4 max-lg:left-0 max-lg:h-full max-lg:overflow-auto z-50">
          <a href="https://git.wur.nl/glowpa/glowpa-model" className="text-blue-500 ms-5 mt-4 text-xl hidden md:flex"><FiGitlab/></a>
          <a href="https://github.com/WaterPath-Project" className="text-blue-500 ms-5 mt-4 text-xl hidden md:flex"><FiGithub/></a>
          <a href="https://www.waterpathogens.org" target="_blank" className="text-blue-500 ms-5 mt-4 text-sm font-body font-bold underline hidden md:flex">waterpathogens.org</a>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        
      </div>
      
      <div className="lg:absolute max-lg:left-10 lg:top-3/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <a href="/" className="flex items-center space-x-3 ">
            <h1 className="text-blue-500 font-header text-4xl tracking-wider font-bold"><span className="mr-0.5 text-green-500">Water</span>Path</h1>
        </a>
      </div>
      <div className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
        <ul className="flex flex-col p-4 md:p-0 mt-4 text-sm border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          { links.map((link) => { return <li>
            <a href={link.url} className="block px-3 font-body font-semibold text-blue-500 hover:text-blue-300 focus:text-blue-700" aria-current="page">{link.text}</a>
          </li>})}
        </ul>
      </div>
    </div>
  </nav>
  <div className={"mt-36 w-full bg-hero2 bg-no-repeat container mx-auto"}>
      <div className="relative text-center pt-20 pb-20">
        <h2 className="text-4xl text-white drop-shadow font-body font-thin">Modelling future screnarios<br/>for waterborne infectious diseases</h2>
        <button type="button" class="absolute font-black left-1/2 transform -translate-x-1/2 bottom-0 text-blue-500 font-body font-extrabold bg-green-500 hover:bg-green-700 focus:bg-green-900 rounded-md text-sm px-5 py-2.5">More about WaterPath</button>
      </div>
      <div className="mt-12 grid md:grid-cols-3 sm:grid-cols-1 gap-24">
        <div className="flex-column p-4">
          <div className="h-36">
            <Learn className="absolute"/>
          </div>
            <h3 className="mt-8 text-3xl font-header font-bold text-blue-500">Learn</h3>
            <p className="mt-6 font-body text-blue-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor diam, varius id aliquet vitae, cursus non velit. Fusce in tortor quis sem dictum feugiat. Vivamus id turpis pharetra, pulvinar augue in, dapibus leo. Donec pharetra, turpis vel mollis congue, mi dui convallis arcu, ut volutpat nibh lacus id sapien. 
            </p>
            <br/>
            <a href="#" className="button font-black text-white font-body focus:bg-blue-700 hover:bg-blue-300 bg-blue-500 rounded-md text-xs px-5 py-2.5">Introduction to Pathogen Modelling</a>
            <br/><br/>
            <a href="#" className="button font-black text-blue-500 font-body bg-sand-500 hover:bg-sand-800 focus:bg-sand-900 rounded-md text-xs px-5 py-2.5">Data Documentation</a>
        </div>
        <div className="flex-column p-4">
          <div className="h-36 relative">
            <Model className="absolute bottom-0"/>
          </div>
          <h3 className="mt-8 text-3xl font-header font-bold text-blue-500">Model</h3>
            <p className="mt-6 font-body text-blue-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor diam, varius id aliquet vitae, cursus non velit. Fusce in tortor quis sem dictum feugiat. Vivamus id turpis pharetra, pulvinar augue in, dapibus leo. Donec pharetra, turpis vel mollis congue, mi dui convallis arcu, ut volutpat nibh lacus id sapien. 
            </p>
            <br/>
            <a href="https://git.wur.nl/glowpa/glowpa-model" className="button font-black text-white font-body focus:bg-blue-700 hover:bg-blue-300 bg-blue-500 rounded-md text-xs px-5 py-2.5">Get the model</a>
            <br/><br/>
            <a href="#" className="button font-black text-blue-500 font-body bg-sand-500 hover:bg-sand-800 focus:bg-sand-900 rounded-md text-xs px-5 py-2.5">Modelling Guidelines</a>
        
        </div>
        <div className="flex-column p-4">
          <div className="h-36 relative">
            <Explore className="absolute bottom-0"/>
          </div>
          <h3 className="mt-8 text-3xl font-header font-bold text-blue-500">Explore</h3>
            <p className="mt-6 font-body text-blue-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor diam, varius id aliquet vitae, cursus non velit. Fusce in tortor quis sem dictum feugiat. Vivamus id turpis pharetra, pulvinar augue in, dapibus leo. Donec pharetra, turpis vel mollis congue, mi dui convallis arcu, ut volutpat nibh lacus id sapien. 
            </p>
            <br/>
            <button disabled className="button font-black text-sand-300 font-body bg-sand-100 rounded-md text-xs px-5 py-2.5">Access the Global map</button>
            <br/><br/>
            <button disabled className="button font-black text-sand-300 font-body bg-sand-100 rounded-md text-xs px-5 py-2.5">View case studies</button>
        
        </div>
        
      </div>
      </div>
      <div class="footer mt-32 bg-sand-500 static bottom-0 left-0 w-full">
        <div className={"pt-24 w-full container mx-auto"}>
            <h4 className="font-body text-sand-700 uppercase font-bold">Partners</h4>
            <div className="md:grid-cols-4 grid gap-24">
              <div className="flex-column mx-auto self-center"><StaticImage src="../images/wur.png"/></div>
              <div className="flex-column mx-auto self-center"><StaticImage src="../images/khulna.png" imgStyle={{ height:"105px", width: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop:'60px' }}/></div>
              <div className="flex-column mx-auto self-center"><StaticImage src="../images/makerere.png" imgStyle={{ height:"105px", width: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop:'50px' }}/></div>
              <div className="flex-column mx-auto self-center"><a href="https://www.venthic.com"><StaticImage src="../images/venthic.png"/></a></div>
            </div>
            <div className="pb-6 mt-12">
              <h4 className="font-body text-sand-700 uppercase font-bold">Funded by</h4>
              <p className="mt-6 font-body text-sm">The WaterPath Toolkit has received funded by the Wellcome Trust Foundation (Grant ref.: 226078/Z/22/Z).</p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>WaterPath Toolkit</title>
