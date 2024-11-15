import React from 'react'
import Hero from '../components/Hero'
import InfoArticle from '../components/InfoArticle'
import MonthlyCalendar from '../components/MonthlyCalendar'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
        <MonthlyCalendar />
      </section>
      <section className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <InfoArticle title="Latest Article 1" />
        <InfoArticle title="Latest Article 2" />
        <InfoArticle title="Latest Article 3" />
      </section>
    </>
  )
}