import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-[#2d3748] text-[#f7fafc]">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Home Movers Nairobi</h3>
            <p className="mb-4">Your trusted moving partner in Nairobi and beyond.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#4299e1]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-[#4299e1]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-[#4299e1]">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#4299e1]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#4299e1]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#4299e1]">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#4299e1]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#4299e1]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>123 Moving Street, Nairobi, Kenya</p>
            <p>Phone: +254 123 456 789</p>
            <p>Email: info@homemoversnairobi.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-2">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 rounded-l-md focus:outline-none"
              />
              <button type="submit" className="bg-[#4299e1] text-[#f7fafc] px-4 py-2 rounded-r-md hover:bg-[#2d3748]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-[#4a5568] pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Home Movers Nairobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

