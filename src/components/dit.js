
import React, { useEffect, useState } from "react";
import useScript from 'react-script-hook';

const Dit = () => {
  const dataIntegrationTool = useScript( {src: 'https://www.venthic.com/sites/default/files/data-integration-tool.js',  onload: () => {console.log('hey');setLoaded(true)}});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) {
      console.log(dataIntegrationTool);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return <div id="root" className="h-[75vh] w-full bg-white"></div>;
}

export default Dit;