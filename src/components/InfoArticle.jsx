import React from 'react'
import PropTypes from 'prop-types'

export default function InfoArticle({ title, author = 'Alex Jones', date = '6/15/2022' }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50 transition duration-100 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{author}</p>
          <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  )
}

InfoArticle.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string,
}