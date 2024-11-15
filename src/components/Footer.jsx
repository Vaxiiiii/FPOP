import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={`${import.meta.env.BASE_URL}FPOPName.png`} alt="FPOP Logo" className="h-40" />
            </div>
            <p className="text-sm">We are a service-oriented organization providing sexual and reproductive services to all the Filipinos, especially the poor, marginalized, socially excluded and underserved.</p>
            
          </div>
          <div>
          <h4 className="font-bold mb-2">Our Mission</h4>  
          <p className="text-sm mb-4">
              Its mission is to lead in creating a society where 
              sexual and reproductive health and right are fulfilled to all,
              especially among the poor and the underserved through advocacy,
              partnership and service delivery.
            </p>
            <h4 className="font-bold mb-2">Our Vision</h4>
            <p className="text-sm mb-4">
              FPOP envisions a world in which all Filipinos enjoying quality 
              of life in the context of sustainable development and are empowered 
              to decide freely on their sexuality and well-being in a society without 
              discrimination.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p>Address: 2F Market Superintendent’s </p>
              <p>Building: Bagong Lipunan, Baguio City</p>
              <p>Phone: 0962 705 5060</p>
              <p>Email: baguiobenguetfpop@gmail.com</p>
            </address><br />
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/fpopbaguiobenguet" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
              <li><Link to="/resources" className="hover:text-gray-900">Resources</Link></li>
              <li><Link to="/chat" className="hover:text-gray-900">AI Chat</Link></li>
              <li><Link to="/appointment" className="hover:text-gray-900">Book an Appointment</Link></li>
              <li><Link to="/volunteers" className="hover:text-gray-900">Volunteer</Link></li>
            </ul>
          </div>
        </div>
        <h4 className="font-bold mb-4 text-center text-2xl">Our Partners</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={`${import.meta.env.BASE_URL}AHF.png`} alt="AHF Logo" className="h-26" />
          </div>
          <div>
            <img src={`${import.meta.env.BASE_URL}AJUWAN.png`} alt="AJUWAN Logo" className="h-25" />
          </div>
          <div>
            <img src={`${import.meta.env.BASE_URL}AUSTRALIANAID.png`} alt="Australian Aid Logo" className="h-25" />
          </div>
          <div>
            <img src={`${import.meta.env.BASE_URL}IPPF.png`} alt="IPPF Logo" className="h-25" />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          <p>&copy; {currentYear} Family Planning Organization of The Philippines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}