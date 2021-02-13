import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { Router } from 'tarojs-router'
import { AtTabBar } from 'taro-ui'
import Home from '../../components/Home/Home'
import Timeline from '../../components/Timeline/Timeline'
import Me from '../../components/Me/Me'

import './index.scss'

const Index = () => {
  const [curr, setCurr] = useState(0)

  useEffect(() => {
    Taro.getStorage({
      key: 'user',
    })
    .then(({ data: user }) => {
      console.log('当前用户', user)
    })
    .catch((error) => {
      console.error(error)
      Router.navigate(
        { url: '/pages/Login/Login' }
      )
    })
  }, [])
  const content = () => {
    switch (curr) {
      case 0:
        return <Home />
      case 1:
        return <Timeline />
      case 2:
        return <Me />
    }
  }
  return (
    <>
      { content()}
      <AtTabBar
        fixed
        tabList={[
          { title: '主页', iconType: 'home', text: 8 },
          { title: '今日', iconType: 'calendar' },
          { title: '我的', iconType: 'user', dot: true }
        ]}
        onClick={(value) => {
          setCurr(value)
        }}
        current={curr}
      />
    </>
  )
}

export default Index