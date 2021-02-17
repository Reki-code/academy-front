import React from 'react'
import { View, Text } from '@tarojs/components'
import {
  AtAvatar, AtButton, AtList, AtListItem,
} from 'taro-ui'
import Taro from '@tarojs/taro'
import { Router } from 'tarojs-router'

const Me = () => {
  const handleLogout = () => {
    try {
      Taro.removeStorageSync('user')
      Router.navigate(
        { url: '/pages/Login/Login' },
      )
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <View>
      <AtAvatar circle image='https://jdc.jd.com/img/200' />
      <Text>
        Display name
      </Text>
      <Text>
        UID
      </Text>
      <AtList>
        <AtListItem
          title='我的关注'
          note='我关注的资料'
          arrow='right'
          iconInfo={{ value: 'star' }}
        />
        <AtListItem
          title='我的讨论'
          note='参加讨论的帖子都在这里'
          arrow='right'
          iconInfo={{ value: 'help' }}
        />
        <AtListItem
          title='个人资料'
          note='用户名等信息'
          arrow='right'
          iconInfo={{ value: 'user' }}
        />
      </AtList>
      <AtButton onClick={handleLogout}>退出登录</AtButton>
    </View>
  )
}

export default Me
