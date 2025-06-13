import React, {useState} from "react"
import {Link} from "gatsby";
import Learn from "../images/learn.svg";
import Model from "../images/model.svg";
import Explore from "../images/explore.svg";
import Layout from "../components/layout";

const IndexPage = () => {

 

  return (
    <Layout>
  <div className={"w-full bg-hero2 bg-no-repeat mx-auto mt-48"}>
    
      <div className="relative text-center pt-[60px] pb-[60px] pb-10">
        <h2 className="md:mt-5 text-4xl text-white drop-shadow font-body font-thin xs:text-2xl sm:text-4xl">Modelling future screnarios<br/>for waterborne infectious diseases</h2>
        <Link to="/about" type="button" class="absolute md:-bottom-[20px] font-black left-1/2 transform -translate-x-1/2 text-blue-500 font-body font-extrabold bg-green-500 hover:bg-green-700 focus:bg-green-900 rounded-md text-sm px-5 py-2.5">More about WaterPath</Link>
      </div>

      
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
