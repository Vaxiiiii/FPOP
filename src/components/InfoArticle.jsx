import React from 'react'

export default function InfoArticle({ title }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50 transition duration-100 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">Alex Jones</p>
          <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="text-sm text-gray-500">6/15/2022</div>
    </div>
  )
}