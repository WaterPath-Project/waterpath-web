import React, { useEffect, useState } from 'react';

const getHeadingLabel = value => value
  .replace(/<img\b[^>]*>/gi, '')
  .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .trim();

const buildHeadingTree = headings => {
  const roots = [];
  const stack = [];

  headings.filter(({ depth }) => depth <= 4).forEach(heading => {
    const item = { ...heading, children: [] };

    while (stack.length && stack[stack.length - 1].depth >= item.depth) {
      stack.pop();
    }

    if (stack.length) {
      stack[stack.length - 1].children.push(item);
    } else {
      roots.push(item);
    }

    stack.push(item);
  });

  return roots;
};

const HeadingList = ({ headings }) => (
  <ul>
    {headings.map(heading => (
      <li key={heading.id}>
        <a href={`#${heading.id}`}>{getHeadingLabel(heading.value)}</a>
        {heading.children.length > 0 && <HeadingList headings={heading.children} />}
      </li>
    ))}
  </ul>
);

const TOC = ({ headings }) => {
  const [isAtFooter, setIsAtFooter] = useState(false);
  const headingTree = buildHeadingTree(headings);

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
    <>
      <details className="toc toc-mobile md:hidden w-full max-w-full min-w-0 mb-8 overflow-hidden">
        <summary className="font-header font-bold cursor-pointer">Sections</summary>
        <nav aria-label="Table of contents"><HeadingList headings={headingTree} /></nav>
      </details>
      <aside
      className={`toc toc-desktop hidden md:block w-80 mr-6 h-fit overflow-y-auto ${
        isAtFooter ? 'relative' : 'sticky'
      } top-24`}>
        <h5 className="mt-0 mb-4 font-bold">Sections</h5>
        <nav aria-label="Table of contents" className="overflow-y-auto text-xs max-h-[calc(100vh-9rem)]"><HeadingList headings={headingTree} /></nav>
      </aside>
    </>
  );
};

export default TOC;