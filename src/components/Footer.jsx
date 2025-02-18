import React from 'react'
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#546581] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Home Movers Nairobi</h3>
            <p className="mb-4">Your trusted moving partner in Nairobi and beyond.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#8B6465]">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-[#8B6465]">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-[#8B6465]">
                <Instagram />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#8B6465]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#8B6465]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#8B6465]">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#8B6465]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8B6465]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2" /> +254 123 456 789
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" /> info@homemoversnairobi.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white text-[#546581] px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#8B6465] text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
          <p>&copy; {new Date().getFullYear()} Home Movers Nairobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

