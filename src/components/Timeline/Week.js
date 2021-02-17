import React, { useState } from 'react'
import Calendar from 'taro-calendar-customizable'
import { AtSwitch } from 'taro-ui'

const Week = ({ selectedDate, setSelectedDate }) => {
  const [currentView, setCurrentView] = useState(selectedDate)
  const [isWeekView, setIsWeekView] = useState(true)
  return (
    <>
      <AtSwitch
        title='周视图'
        checked={isWeekView}
        onChange={setIsWeekView}
      />
      <Calendar
        view={isWeekView ? 'week' : 'month'}
        currentView={currentView}
        onCurrentViewChange={setCurrentView}
        selectedDate={selectedDate}
        hideController
        onDayClick={({ value }) => setSelectedDate(value)}
      />
    </>
  )
}

export default Week
