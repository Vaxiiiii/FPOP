import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Header component that renders the navigation bar
export default function Header() {
  // State to manage the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="border-b border-gray-200 bg-[#f1f1de]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-[#f1f1de]">
        
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}FPOP.png`} 
              alt="FPOP Logo" 
              className="h-10 mr-2" 
            />
            <h1 className="text-2xl font-bold"> - Baguio Chapter</h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/resources" className="hover:text-gray-600">Resources</Link>
          <Link to="/chat" className="hover:text-gray-600">AI Chat</Link>
          <Link to="/appointment" className="hover:text-gray-600">Book an appointment</Link>
          <Link to="/volunteers" className="hover:text-gray-600">Volunteer</Link>
        </nav>

        <div className="relative" ref={dropdownRef}>
          <div 
            className="w-10 h-10 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-sm font-medium">JD</span>
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <div className="px-4 py-2 text-sm text-gray-700">John Doe</div>
              <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
              <button onClick={() => console.log('Logout clicked')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}       












