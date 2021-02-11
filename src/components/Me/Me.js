import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtButton } from 'taro-ui'
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
				This is ME!!!
			</Text>
      <AtButton onClick={handleLogout}>退出登录</AtButton>
		</View>
	)
}

export default Me