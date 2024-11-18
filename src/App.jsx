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
import Auth from './pages/Auth'
import Youth from './pages/Youth'

function App() {
  return (
    <Router basename="/FPOP">
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={
            <>
              <Header />
              <main className="flex-grow ">
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="resources" element={<Resources />} />
                  <Route path="chat" element={<AIChat />} />
                  <Route path="appointment" element={<BookAppointment />} />
                  <Route path="volunteers" element={<Volunteers />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="youth" element={<Youth />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App