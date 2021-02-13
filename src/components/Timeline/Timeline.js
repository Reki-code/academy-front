import React, { useState } from 'react'
import Calendar from 'taro-calendar-customizable'
import { View, Text } from '@tarojs/components'
import { AtButton, AtSwitch } from 'taro-ui'

const Timeline = () => {
  const [currentView, setCurrentView] = useState('2021-02-01')
  const [selected, setSelected] = useState('2020-02-01')
  const [isWeekView, setIsWeekView] = useState(true)
  return (
    <>
      <Text>在学的课程</Text>
      <View>
        <Calendar
          view={isWeekView ? 'week' : 'month'}
          currentView={currentView}
          onCurrentViewChange={setCurrentView}
          selectedDate={selected}
          hideController={true}
          onDayClick={({ value }) => {
            setSelected(value)
            console.log(value)
          }}
        />
        <Text style={{ display: 'block', width: '100vw', textAlign: 'center' }}>
          {currentView}
        </Text>
        <AtButton onClick={() => setCurrentView('2019-08')}>
          设置view为2019-08
      </AtButton>
        <AtButton onClick={() => setSelected('2019-08-08')}>
          选中2019-08-08
      </AtButton>
        <AtSwitch
          title='周视图'
          checked={isWeekView}
          onChange={setIsWeekView}
        />
      </View>
    </>
  )
}

export default Timeline