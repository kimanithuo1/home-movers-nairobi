"use client"
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gradient-to-r from-[#1a365d] to-[#2d3748] text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Home Movers Nairobi
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/booking">Book Now</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#2d3748] py-4">
          <nav className="flex flex-col space-y-4 items-center">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={toggleMenu}>
              Services
            </NavLink>
            <NavLink to="/booking" onClick={toggleMenu}>
              Book Now
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu}>
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ to, children, onClick }) {
  return (
    <Link to={to} className="text-white hover:text-[#4299e1] transition duration-300 font-medium" onClick={onClick}>
      {children}
    </Link>
  )
}

export default Header

