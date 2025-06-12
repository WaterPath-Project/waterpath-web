import * as React from "react"
import Layout from "../components/layout";  
import {StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';  

export default () => {
  return (
    <Layout>
  <div className={"w-full container mx-auto mt-48"}>
  <form
      action="https://formsubmit.co/6c02341b2ed87fdb58e3c10720b433c5"
      method="POST"
      className="font-body max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-blue-500 mb-12">Contact us</h2>

      {/* Honeypot field (spam protection) */}
      <input type="text" name="_honey" className="hidden" />

      {/* Disable captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Redirect on success (optional) */}
      <input type="hidden" name="_next" value="https://waterpath-toolkit.org" />

      <div>
        <label className="block text-sm font-medium text-blue-500">Full Name</label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-500">Organisation</label>
        <input
          type="text"
          name="affiliation"
          required
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-500">Email address</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

        

      <div>
        <label className="block text-sm font-medium text-blue-500">Reason for reaching out</label>
  <select name="reason" id="countries" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option selected value="Stay informed about the WaterPath Toolkit">Stay informed about the WaterPath Toolkit</option>
    <option value="Interested in using the Toolkit">Interested in using the Toolkit</option>
    <option value="Support regarding Toolkit usage">Support regarding Toolkit usage</option>
    <option value="I want to learn more about the project">I want to learn more about the project</option>
  </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-500">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 hover:bg-green-500 transition"
      >
        Send Message
      </button>
    </form>
      </div>
      </Layout>
  )
}


export const Head = () => <title>WaterPath Toolkit - Contact us</title>
