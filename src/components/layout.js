import React from "react"
import { useLocation } from "@gatsbyjs/reach-router";
import { StaticImage } from "gatsby-plugin-image";
import { FiGithub, FiGitlab, FiGlobe } from "react-icons/fi";
import {Link} from "gatsby"
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const links = [
    {
      text: "About",
      url: "/about"
    }
  ]

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const normalizedPath = pathname.replace(/^\/+|\/+$/g, "")
  const pageClass = normalizedPath
    ? `page-${normalizedPath.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`
    : "page-home"

  return (
      
    <main className={`bg-back-white ${pageClass}`}>
        <Navbar/>
    <div className="max-w-7xl mx-auto">
      {children}
      </div>
      <Footer/>
    </main>
  )
}