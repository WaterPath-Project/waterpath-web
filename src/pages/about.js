import * as React from "react"
import Layout from "../components/layout";  
import {StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';  

export default () => {
  return (
    <Layout>
  <div className={"w-full container mx-auto mt-48"}>
      <div className={'grid md:grid-cols-3 xs:grid-cols-1 gap-0.5'}>
            <div className="hidden md:flex">
              <StaticImage
                src="../images/about.png"
                alt="About image"
                placeholder="blurred"
                layout="fixed"
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-blue-500 font-header text-3xl tracking-wider font-extrabold mb-8">About WaterPath</h1>
              <h2 className="text-blue-500 font-body font-medium text-2xl mb-4">What is the WaterPath Toolkit?</h2>
              <p className="text-blue-500 font-body mb-8 font-medium">WaterPath is an open-source modelling toolkit for quantifying and visualising the impact of climate change and socio-economic development on waterborne pathogens and AMR bacteria in surface water and consequent disease risk.</p>
              <p className="border-l-8 border-green-500 rounded p-4 italic text-blue-500 font-body mb-8">We envisage that the WaterPath Toolkit becomes the main point of reference for modelling population exposure to waterborne diseases in future climate scenario analysis. Targeting a diverse audience of users: scientists, modellers and data scientists, software engineers and policy makers, we are creating a unique community of practice that will participate in the conceptualization and testing of the Toolkit.</p>
              <h2 className="text-blue-500 font-body font-medium text-2xl mb-4">What does it do?</h2>
              <p className="text-blue-500 font-body mb-2 font-medium mb-8">The toolkit provides knowledge for stakeholders on main patterns in pathogen concentrations and disease risk now and in the future (2030, 2050, 2100). Additionally, it presents the main sources of contamination and interventions. Moreover, for modellers, the toolkit provides open access to the Global Waterborne Pathogen (GloWPa) model and the data required for the model (present and future scenarios). In the project we will develop the GloWPa model further to include extreme events and Quantitative Microbial Risk Assessment globally and for case-study regions. The developed model and toolkit will help stakeholders to identify and mitigate potential waterborne pathogen problems and associated health risks.</p>
              <h2 className="text-blue-500 font-body font-medium text-2xl mb-4">What is the GloWPa model?</h2>
              <p className="text-blue-500 font-body mb-2 font-medium mb-8">The GloWPa (Global Waterborne Pathogen) model simulates emissions and concentrations of pathogens (currently Cryptosporidium and rotavirus) to/in surface water. These pathogens are known to be a leading cause of diarrhoeal diseases globally. GloWPa focuses on human and livestock emissions of pathogens that end up in surface water systems through various pathways. Read more about GloWPa in our <Link className="underline text-green-500" to='/learn/introduction-to-glowpa'>introductory documentation</Link>.</p>

              <h2 className="text-blue-500 font-body font-medium text-2xl mb-4">Who is developing the Toolkit?</h2>
              
              
              <p className="text-blue-500 font-body mb-2 font-medium mb-8">The model and toolkit is developed by four organisations:
              <ul className="pl-8 list-disc">
                <li><b>Wageningen University</b>, represented by P.I. Dr. <span className="text-green-500 font-bold">Nynke Hofstra</span>, postdoc Dr. <span className="text-green-500 font-bold">Stijn Peters</span> and model developer and programmer <span className="text-green-500 font-bold">Lisanne Nauta</span> from the Water Systems and Global Change group. The team brings the GloWPa model to the project and leads the overall project activities and GloWPa extensions. </li>
                <li><b><a href="https://venthic.com">Venthic Technologies</a></b>, represented by <span className="text-green-500 font-bold">Panagis Katsivelis</span> and other team members. Venthic develops the user-facing side of the Toolkit, ie. all the digital tools that to be used by stakeholders. The team also provides guidance on aspects of data management and open source practices.</li>
                <li><b>Khulna University</b>, represented by Prof. <span className="text-green-500 font-bold">Wasim Sabir</span> and postdoc M.M. <span className="text-green-500 font-bold">Majedul Islam</span> from the Environmental Science Discipline The team brings experience with water quality modelling, in addition to experience in developing the QMRA part of the model. Khulna University will help implement use cases for Bangladesh and will work with engaging relevant stakeholders.</li> 
                <li><b>Makerere University</b>, represented by Dr. <span className="text-green-500 font-bold">Richard Mugambe</span> and postdoc <span className="text-green-500 font-bold">Daniel Okaali</span> from the School of Public Health. The brings expertise in public health and exposure assessment, together with experience of using the GloWPa model in socio-economic development and climate change scenario analysis and risk assessment in Uganda. Makerere University will also develop the Concentrations part of the model and will engage with local stakeholders in Uganda.</li>.  
              </ul>
              </p>
              <div  className="flex justify-center">
              <StaticImage
                src="../images/team.jpg"
                alt="Team"
                placeholder="blurred"
                width={400}
              />
              </div>
            </div>
          
            <div className="md:col-span-3">
            </div>
      </div>
      </div>
      </Layout>
  )
}


export const Head = () => <title>WaterPath Toolkit</title>
