import React, {useState, useEffect} from "react"
import Layout from "../components/layout";  
import {StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';  

export default ({location}) => {
    const [success, setSuccess] = useState(false);
    const [closedPrompt, setClosedPrompt] = useState(false);
    

    useEffect(() => {
        const params = new URLSearchParams(location.search);
    const contactSuccess = params.get("status");
    if (contactSuccess === 'success') {
      setSuccess(true);
    }
      });

  return (
    <Layout>
  <div className={"w-full max-w-xl mx-auto mt-48"}>
      {(success && !closedPrompt) && <div id="alert-border-3" class="mt-12 flex items-center container p-4 mb-4 text-blue-500 border-t-4 border-green-500 bg-green-500 " role="alert">
    <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div class="ms-3 text-sm font-medium">
      Your message has been sent to the WaterPath team. We will reach out to you soon!
    </div>
    <button onClick={() => {setSuccess(false); setClosedPrompt(true)}} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-500 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 p-1.5 hover:bg-blue-500 hover:text-white inline-flex items-center justify-center h-8 w-8"  data-dismiss-target="#alert-border-3" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
    </div>}
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
      <input type="hidden" name="_next" value="https://waterpath-toolkit.org/contact?status=success" />

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
  <select name="reason" id="countries" class="border text-sm rounded-lg text-blue-500 font-medium bg-sand-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option selected value="General question">General question</option>
    <option value="Toolkit feedback">Toolkit feedback</option>
    <option value="Collaboration inquiry">Collaboration inquiry</option>
    <option value="Other">Other</option>
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
        className="bg-blue-500 text-white py-2 px-4 hover:bg-green-500 transition font-header"
      >
        Send Message
      </button>
    </form>
      </div>
      </Layout>
  )
}


export const Head = () => <title>WaterPath Toolkit - Contact us</title>
