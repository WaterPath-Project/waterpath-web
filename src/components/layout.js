import React from "react"
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
  return (
      
    <main className="bg-back-white">
        <Navbar/>
    <div className="max-w-7xl mx-auto">
      {children}
      </div>
      <Footer/>
    </main>
  )
}