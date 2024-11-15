import React from 'react'
import InfoArticle from '../components/InfoArticle'


export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <input
          type="search"
          placeholder="Search resources..."
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <h2 className="text-3xl font-bold mb-4">Resources</h2>
      <p className="mb-8">Here you can find various resources related to sexual health:</p>

      <div className="space-y-6">
        <InfoArticle title="Understanding Sexual Health Basics" />
        <InfoArticle title="Common Questions About STIs" />
        <InfoArticle title="Birth Control Methods Guide" />
        <InfoArticle title="LGBTQ+ Sexual Health Resources" />
        <InfoArticle title="Mental Health and Sexuality" />
        <InfoArticle title="Finding Support Groups Near You" />
      </div>
    </div>
  )
}