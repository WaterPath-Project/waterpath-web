import React, { useState, useEffect } from "react"
import { FiGithub, FiGitlab, FiGlobe } from "react-icons/fi";
import { Link } from "gatsby"

const links = [
    {
      text: "About",
      url: "/about"
    },
    {
      text: "Learn",
      url: "/learn"
    },
    {
      text: "Model",
      url: "/model"
    },
    {
      text: "Contact",
      url: "/contact"
    }

  ]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 return ( 
    <nav className={`fixed w-full top-0 start-0 z-20 mb-24 ${
      scrolled ? "bg-opacity-90 bg-blue-100 shadow-md p-8" : "p-16 bg-back-white"}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="lg:flex relative w-full z-50">
          <div className="flex justify-between items-center w-full">
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
       <div className="absolute left-1/2 transform -translate-x-1/2 xs:ml-4">
         <Link to="/" className="flex items-center space-x-3">
             <h1 className="text-blue-500 font-header text-4xl tracking-wider font-bold"><span className="mr-0.5 text-green-500">Water</span>Path</h1>
         </Link>
       </div>
       <div className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
         <ul className="flex flex-col pt-4 mt-4 text-sm border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
           { links.map((link) => { 
               return <li>
                <Link to={link.url} className="block px-3 font-body font-semibold text-blue-500 hover:text-blue-300 focus:text-blue-700" aria-current="page">{link.text}</Link>
              </li>
          })}
         </ul>
       </div>
       <div className="flex space-x-4">
           <a href="https://git.wur.nl/glowpa/glowpa-r" className="text-blue-500 ms-5 mt-4 text-xl hidden md:flex hover:text-blue-300"><FiGitlab/></a>
           <a href="https://github.com/WaterPath-Project" className="text-blue-500 ms-5 mt-4 text-xl hidden md:flex hover:text-blue-300"><FiGithub/></a>
           <a href="https://www.waterpathogens.org" target="_blank" className="text-blue-500 ms-5 mt-4 text-sm font-body font-bold underline hidden md:flex hover:text-blue-300">waterpathogens.org</a>
           
       
       </div>
          
          
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col pt-4 mt-4 text-sm md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          { links.map((link) => { return <li><Link to={link.url} className="block px-3 font-body font-semibold text-blue-500 hover:text-blue-300 focus:text-blue-700 text-lg border-b-2 border-sand-100" aria-current="page">{link.text}</Link></li>})}
          
          </ul>
           
        </div>
      )}
    </nav>
  
)
          }

export default Navbar

