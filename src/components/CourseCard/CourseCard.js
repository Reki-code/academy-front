import React from 'react'
import { View, Image } from '@tarojs/components'

const CourseCard = ({ course }) => {
  return (
    <View className='bg-white rounded-b-md shadow'>
      <Image
        src={course.cover}
        className='w-full object-cover' 
      />
      <View className='font-semibold'>{ course.title }</View>
      <View className=''>{ course.teacher }</View>
    </View>
  )
}

export default CourseCard