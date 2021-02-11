import React, { useState } from 'react'
import { AtTabBar } from 'taro-ui'
import Home from '../../components/Home/Home'
import Me from '../../components/Me/Me'

import 'taro-ui/dist/style/index.scss'
import './index.scss'

const Index = () => {
  const [curr, setCurr] = useState(0)

  const content = () => {
    switch (curr) {
      case 0:
        return <Home />
      case 1:
        return <Me />
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
          { title: '私信', iconType: 'folder' },
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