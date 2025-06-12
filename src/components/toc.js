import React, { useEffect, useRef, useState } from 'react';

const TOC = ( {content} ) => {
  const tocRef = useRef(null);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsAtFooter(entry.isIntersecting),
      { root: null, threshold: 0 }
    );

    observer.observe(footerEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
        <aside
        
      ref={tocRef} 
      className={`toc w-80 mr-6 h-fit  xs:hidden md:block overflow-y-auto ${
        isAtFooter ? 'relative' : 'sticky'
      } top-24`}>
          <h5 className="pl-4 pr-4 mb-4 font-bold">Sections</h5>
      <div className="overflow-y-auto pt-100 text-xs h-80" dangerouslySetInnerHTML={{ __html: content }}></div><br/><br/><br/>
    </aside>
  );
};

export default TOC;