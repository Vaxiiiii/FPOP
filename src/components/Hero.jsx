import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Promoting Sexual Health and Wellness",
      description: "Comprehensive education and resources for better health understanding."
    },
    {
      title: "Expert-Led Information",
      description: "Evidence-based guidance from healthcare professionals."
    },
    {
      title: "Confidential Support",
      description: "Safe and private access to essential health information."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gray-100 py-40 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 absolute w-full ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {slide.title}
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                {slide.description}
              </p>
            </div>
          ))}
        </div> 
      </div>
    </section>
  )
} 
