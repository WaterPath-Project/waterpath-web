import React, {useState} from "react"
import {Link} from "gatsby";
import Learn from "../images/learn.svg";
import Model from "../images/model.svg";
import Explore from "../images/explore.svg";
import Layout from "../components/layout";

const IndexPage = ({location}) => {

  const [success, setSuccess] = useState(false);
  const params = new URLSearchParams(location.search);
  const contactSuccess = params.get("contact");
  if (contactSuccess === 'success') {
    setSuccess(true);
  }

  return (
    <Layout>
  <div className={"w-full bg-hero2 bg-no-repeat mx-auto mt-48"}>
    
      <div className="relative text-center pt-[60px] pb-[60px] pb-10">
        <h2 className="md:mt-5 text-4xl text-white drop-shadow font-body font-thin xs:text-2xl sm:text-4xl">Modelling future screnarios<br/>for waterborne infectious diseases</h2>
        <Link to="/about" type="button" class="absolute md:-bottom-[20px] font-black left-1/2 transform -translate-x-1/2 text-blue-500 font-body font-extrabold bg-green-500 hover:bg-green-700 focus:bg-green-900 rounded-md text-sm px-5 py-2.5">More about WaterPath</Link>
      </div>

      {/* {(success) && <div id="alert-border-3" class="mt-12 flex items-center p-4 mb-4 text-blue-500 border-t-4 border-green-500 bg-green-500 " role="alert">
    <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div class="ms-3 text-sm font-medium">
      Your message has been sent to the WaterPath team. We will reach out to you soon!
    </div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-500 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 p-1.5 hover:bg-blue-500 hover:text-white inline-flex items-center justify-center h-8 w-8"  data-dismiss-target="#alert-border-3" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
    </div>} */}
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-24 mt-16">
        <div className="flex-column p-4">
          <div className="h-[140px] relative">
            <Learn className='h-full w-full absolute sm:-left-[70px]'/>
          </div>
            <h3 className="mt-16 text-3xl font-header font-bold text-blue-500">Learn</h3>
            <p className="mt-6 font-body text-blue-500 font-medium">
            Discover learning resources on waterborne pathogen modelling tailored for researchers, modellers, and developers.
Browse tutorials, guidelines, and documentation that cover key concepts of the WaterPath Toolkit. 
Explore relevant themes of research: from climate and hydrology, to data science and computational modelling. 

            </p>
            <br/>
            <Link to="/learn" className="button font-black text-white font-body focus:bg-blue-700 hover:bg-blue-300 bg-blue-500 rounded-md text-xs px-5 py-2.5">Learning resources</Link>
            <br/><br/>
            <Link to="/" className="button font-black text-blue-500 font-body bg-sand-500 hover:bg-sand-800 focus:bg-sand-900 rounded-md text-xs px-5 py-2.5">Data Documentation</Link>
        </div>
        <div className="flex-column p-4">
          <div className="h-[120px] relative mt-[20px]">
            <Model className="h-full w-full absolute bottom-0"/>
          </div>
          <h3 className="mt-16 text-3xl font-header font-bold text-blue-500">Model</h3>
            <p className="mt-6 font-body text-blue-500 font-medium">
            Access the open-source GloWPa model and use it to simulate the spread and impact of waterborne pathogens.
Download the required input datasets and follow step-by-step instructions to run and customize the model for your use case.
Support your research with reproducible and transparent output materials.
            </p>
            <br/>
            <Link to="/model" className="button font-black text-white font-body focus:bg-blue-700 hover:bg-blue-300 bg-blue-500 rounded-md text-xs px-5 py-2.5">Access the model</Link>
            <br/><br/>
            <Link to="/docs/modelling-guidelines" className="button font-black text-blue-500 font-body bg-sand-500 hover:bg-sand-800 focus:bg-sand-900 rounded-md text-xs px-5 py-2.5">Modelling Guidelines</Link>
        
        </div>
        <div className="flex-column p-4">
          <div className="h-[120px] relative mt-[20px]">
            <Explore className="h-full w-full absolute bottom-0"/>
          </div>
          <h3 className="mt-16 text-3xl font-header font-bold text-blue-500">Explore</h3>
            <p className="mt-6 font-body text-blue-500 font-medium">
            Browse a collection of pre-run model use cases covering global and country-specific scenarios.
Visualize results through interactive maps and dashboards to understand pathogen dynamics across geographic areas.
Compare future scenarios and investigate how changes in inputs affect model outcomes and public health.
            </p>
            <br/>
            <button disabled className="button font-black text-sand-300 font-body bg-sand-100 rounded-md text-xs px-5 py-2.5">Access the Global map</button>
            <br/>
            <button disabled className="button mt-3 font-black text-sand-300 font-body bg-sand-100 rounded-md text-xs px-5 py-2.5">View case studies</button>
        
        </div>
        
      </div>
      </div>
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>WaterPath Toolkit</title>
