import React from 'react'
import { Text, View } from '@tarojs/components'
import { useRouter } from 'tarojs-router'


const CourseDetail = () => {
  // Router.navigate({ url: '/pages/index/index' }, { params: { id: 11 } })
  const { params } = useRouter()
  return (
    <>
      <Text>课程详情</Text>

      <View>{decodeURI(params.title)}</View>
      <View>{params.title}</View>
    </>
  )
}

export default CourseDetail