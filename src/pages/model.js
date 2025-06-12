import * as React from "react";
import {createRoot} from "react";
import Layout from "../components/layout";
// import App from "../../external-repos/waterpath-data-integration-tool/dist/data-integration-tool.js";
// import "../../external-repos/waterpath-data-integration-tool/src/i18n";


const ModelPage = () => {
  return (
    <Layout>
      {/* <div id="root"> */}
        
        {/* <StrictMode>
          <App />
        </StrictMode> */}
      {/* </div> */}
      {/* <Dit/> */}
         <iframe className="mt-40" loading="lazy" height={1500} width="100%" src="https://waterpath-project.github.io/waterpath-data-integration-tool/"></iframe>
      </Layout>
  )
}

export default ModelPage

export const Head = () => <title>WaterPath Toolkit - Model</title>