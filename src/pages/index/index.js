import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { Router } from 'tarojs-router'
import { AtTabBar } from 'taro-ui'
import Home from '../../components/Home/Home'
import Timeline from '../../components/Timeline/Timeline'
import Me from '../../components/Me/Me'

import './index.scss'

const Index = () => {
  const tabs = [
    { content: <Home />, title: '主页', iconType: 'home' },
    { content: <Timeline />, title: '今日', iconType: 'calendar' },
    { content: <Me />, title: '我的', iconType: 'user' }
  ]
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

  return (
    <>
      { tabs[curr].content }
      <AtTabBar
        fixed
        tabList={tabs}
        onClick={setCurr}
        current={curr}
      />
    </>
  )
}

export default Index