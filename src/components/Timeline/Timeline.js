import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTimeline } from 'taro-ui'
import Week from './Week'

const Timeline = () => {
  const today = new Date().toISOString().slice(0,10)
  const [selectedDate, setSelectedDate] = useState(today)
  const timelineData = [
    { title: 'Day1: 听力口语 独家密集', content: ['20:00', '直播'], icon: 'clock', color: 'green'},
    { title: 'Day2: 偷懒技巧 突破瓶颈', content: ['20:00', '如何像美国人一样流利说英语'], icon: 'check-circle', color: 'red'},
    { title: 'Day3: 生活场景 实战演绎', content: ['20:00'], icon: 'clock', color: 'yellow' },
    { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
  ]
  return (
    <>
      <View>
        <Text>在学的课程</Text>
        <Week selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <AtTimeline
          items={timelineData}
        />
      </View>
      <View style={ {height: '60px'} } />
    </>
  )
}

export default Timeline