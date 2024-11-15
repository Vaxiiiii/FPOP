import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resources from './pages/Resources'
import AIChat from './pages/AIChat'
import BookAppointment from './pages/BookAppointment'
import Volunteers from './pages/Volunteers'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/chat" element={<AIChat />} />
            <Route path="/appointment" element={<BookAppointment />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App