"use client"
import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="bg-[#546581] text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white">
            Home Movers Nairobi
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/booking">Book Now</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="mr-4 text-white hover:text-[#8B6465]">
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="md:hidden text-white hover:text-[#8B6465]" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#546581] py-4 animate-fadeIn">
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
    <Link to={to} className="text-white hover:text-[#8B6465] transition duration-300 font-medium" onClick={onClick}>
      {children}
    </Link>
  )
}

export default Header

