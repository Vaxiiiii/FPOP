import React, { useState } from 'react'

export default function AIChat() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the message to your AI backend
    console.log('Message sent:', message)
    setMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">AI Chat</h2>
      <div className="flex gap-4">
        <div className="w-1/4 bg-gray-50 p-4 rounded-lg h-[32rem] overflow-y-auto">
          <h3 className="font-semibold mb-4">Chat History</h3>
          <div className="space-y-2">
            <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
              <p className="font-medium">Family Planning Discussion</p>
              <p className="text-sm text-gray-600">June 15, 2024</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
              <p className="font-medium">Sexual Health Questions</p>
              <p className="text-sm text-gray-600">June 14, 2024</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
              <p className="font-medium">STI Prevention Info</p>
              <p className="text-sm text-gray-600">June 12, 2024</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-gray-100 p-6 rounded-lg mb-4 h-[32rem] overflow-y-auto">
            <div className="space-y-4">
              <p className="text-xl font-semibold">Welcome to FPOP's AI Health Assistant!</p>
              <p className="text-gray-700">I'm here to help answer your questions about:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li className="p-4 mb-2 border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all" onClick={() => setMessage("Tell me about family planning methods and contraception")}>Family planning methods and contraception</li>
                <li className="p-4 mb-2 border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all" onClick={() => setMessage("Tell me about sexual and reproductive health")}>Sexual and reproductive health</li>
                <li className="p-4 mb-2 border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all" onClick={() => setMessage("Tell me about STI prevention and testing")}>STI prevention and testing</li>
                <li className="p-4 mb-2 border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all" onClick={() => setMessage("Tell me about relationship and sexuality concerns")}>Relationship and sexuality concerns</li>
              </ul>
              <p className="text-gray-700">Feel free to ask any questions - I'm here to provide accurate, judgment-free information to help you make informed decisions about your health.</p>
              <p className="text-gray-500 text-sm">Note: While I can provide general information, please consult healthcare professionals for medical advice specific to your situation.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow p-2 border rounded-l-lg"
              placeholder="Type your message here..."
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}