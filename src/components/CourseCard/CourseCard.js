import React from 'react'
import { View, Image } from '@tarojs/components'
import { Router } from 'tarojs-router'

const CourseCard = ({ course }) => {
  const handleClick = () => {
    Router.navigate(
      { url: '/pages/CourseDetail/CourseDetail' },
      { params: { title: course.title } },
    )
  }
  return (
    <View onClick={handleClick} className='bg-white rounded-b-md shadow'>
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
