import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {

 return ( 
    
    <div id="site-footer" className="footer mt-32 bg-sand-500 static bottom-0 left-0 w-full">
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
          <p className="mt-6 font-body font-medium text-sm">The WaterPath Toolkit has received funding by the Wellcome Trust Foundation (Grant ref.: 226078/Z/22/Z).</p>
        </div>
    </div>
  </div>
  
)
          }

export default Footer