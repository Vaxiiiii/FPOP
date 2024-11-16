import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false)
  const userDropdownRef = useRef(null)
  const notificationDropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false)
      }
      if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
        setIsNotificationDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [userDropdownRef, notificationDropdownRef])

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen)
  }

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen)
  }

  return (
    <header className="border-b bg-[#ffce54]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}FPOP.png`} 
              alt="FPOP Logo" 
              className="h-10 mr-2" 
            />
            <h1 className="text-2xl font-bold text-black"> Baguio - Benguet Chapter</h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-black hover:text-black hover:border-b-2 border-black transition-colors font-bold">Home</Link>
          <Link to="/resources" className="text-black hover:text-black hover:border-b-2 border-black transition-colors font-bold">Resources</Link>
          <Link to="/chat" className="text-black hover:text-black hover:border-b-2 border-black transition-colors font-bold">AI Chat</Link>
          <Link to="/appointment" className="text-black hover:text-black hover:border-b-2 border-black transition-colors font-bold">Book an appointment</Link>
          <Link to="/volunteers" className="text-black hover:text-black hover:border-b-2 border-black transition-colors font-bold">Volunteer</Link>
        </nav>
        
        <div className="flex items-center space-x-4"> 
          {/* Notification dropdown */}
          <div className="relative" ref={notificationDropdownRef}>
            <div 
              className="w-10 h-10 rounded-full border-2 border-[#ffce54] bg-white flex items-center justify-center cursor-pointer hover:border-black"
              onClick={toggleNotificationDropdown}
            >
              <span className="text-sm font-medium">🔔</span>
            </div>
            {isNotificationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
                <div className="px-4 py-2 text-sm font-semibold text-black">Notifications</div>
                <div className="px-4 py-2 text-sm text-gray-700 border-b">
                  <p className="font-semibold">New message</p>
                  <p className="text-xs text-gray-500">You have a new message from Dr. Smith</p>
                </div>
                <div className="px-4 py-2 text-sm text-gray-700 border-b">
                  <p className="font-semibold">Appointment reminder</p>
                  <p className="text-xs text-gray-500">Your appointment is tomorrow at 2 PM</p>
                </div>
                <Link to="/notifications" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">View all notifications</Link>
              </div>
            )}
          </div>

          {/* User dropdown menu */}
          <div className="relative" ref={userDropdownRef}>
            <div 
              className="w-10 h-10 rounded-full border-2 border-[#ffce54] bg-white flex items-center justify-center cursor-pointer hover:border-black transition-colors"
              onClick={toggleUserDropdown}
            >
              <span className="text-sm font-medium">JD</span>
            </div>
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <div className="px-4 py-2 text-sm text-black font-semibold">John Doe</div>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                <hr className="border-t border-gray-200" />
                <button onClick={() => console.log('Logout clicked')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}