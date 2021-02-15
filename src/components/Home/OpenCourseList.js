import React from 'react'
import { Text, View } from '@tarojs/components'
import CourseCard from '../CourseCard/CourseCard'

const OpenCourseList = () => {
  const course = {
    cover: 'https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd',
    title: '数字图像处理',
    teacher: '章毓晋'
  }
  const courseList = [
    course, course, course, course, course, course
  ]
  return (
    <>
      <Text>公开课</Text>
      <View className='grid gap-1 grid-cols-2 bg-gray-100 px-1'>
        {courseList.map(course =>
          (<CourseCard key={course.title} course={course} />)
        )}
      </View>
    </>
  )
}

export default OpenCourseList