import React, { useState } from 'react'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import { Router } from 'tarojs-router'
import {
  AtNoticebar,
  AtList, AtListItem,
} from 'taro-ui'
import OpenCourseList from './OpenCourseList'

const Home = () => {
  const [currentSwiper, setCurrentSwiper] = useState(0)
  const handleMore = () => {
    console.log('to ann')
    Router.navigate(
      { url: '/pages/Announcement/Announcement' },
      { data: '' },
    )
  }

  return (
    <>
      <Swiper
        indicatorDots
        autoplay
        current={currentSwiper}
        circular
        skipHiddenItemLayout
        onChange={({ target }) => setCurrentSwiper(target.value)}
      >
        <SwiperItem>
          <View>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View>3</View>
        </SwiperItem>
      </Swiper>
      <View onClick={handleMore}>
        <AtNoticebar
          marquee
          showMore
          icon='volume-plus'
        >
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>
      </View>
      <AtList>
        <AtListItem
          title='标题文字'
          note='描述信息'
          arrow='right'
          iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar' }}
        />
        <AtListItem
          title='标题文字'
          note='描述信息'
          extraText='详细信息'
          arrow='right'
          iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark' }}
        />
      </AtList>
      <AtList>
        <AtListItem
          title='标题文字'
          arrow='right'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        />
        <AtListItem
          title='标题文字'
          note='描述信息'
          arrow='right'
          thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        />
        <AtListItem
          title='标题文字'
          note='描述信息'
          extraText='详细信息'
          arrow='right'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
      </AtList>
      <OpenCourseList />
      <View style={{ height: '60px' }} />
    </>
  )
}

export default Home
