import React, { useState, useEffect } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns'

export default function MonthlyCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Function to fetch events for the current month
    const fetchEvents = async () => {
      try {
        // Here you would typically fetch from your API
        // const response = await api.get(`/events/${format(currentMonth, 'yyyy-MM')}`)
        // setEvents(response.data)

        // Temporary mock data
        setEvents([
          {
            date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 5),
            title: 'Sexual Health Workshop'
          },
          {
            date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 12),
            title: 'Free HIV Testing Day'
          },
          {
            date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 20),
            title: 'LGBTQ+ Support Group'
          },
        ])
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchEvents()
  }, [currentMonth]) // Re-fetch when month changes

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getEventForDate = (date) => {
    return events.find(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    )
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{format(currentMonth, 'MMMM yyyy')}</h2>
        <div>
          <button
            onClick={() => setCurrentMonth(date => new Date(date.getFullYear(), date.getMonth() - 1, 1))}
            className="mr-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            &lt;
          </button>
          <button
            onClick={() => setCurrentMonth(date => new Date(date.getFullYear(), date.getMonth() + 1, 1))}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {weekdays.map(day => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {monthDays.map(day => {
          const event = getEventForDate(day)
          return (
            <div
              key={day.toString()}
              className={`p-2 border ${
                !isSameMonth(day, currentMonth) ? 'text-gray-400' :
                isToday(day) ? 'bg-blue-100 font-bold' : ''
              }`}
            >
              <div className="text-right">{format(day, 'd')}</div>
              {event && (
                <div className="mt-1 text-xs bg-purple-200 p-1 rounded">
                  {event.title}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}