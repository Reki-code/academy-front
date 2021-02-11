import React, { useState } from 'react'
import { AtForm, AtButton, AtInput } from 'taro-ui'
import { Router } from 'tarojs-router'
import Taro from '@tarojs/taro'

const Login = () => {
  const [userid, setUserid] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    const user = {
      userid, password
    }
    Taro.setStorage({
      key: 'user',
      data: user
    })
    .then(() => {
      console.log('登录用户', user)
      Router.navigate(
        { url: '/pages/index/index' }
      )
    })
  }
  return (
    <>
      <AtForm>
        <AtInput
          name='userid'
          title='学号/工号'
          type='text'
          value={userid}
          onChange={(value) => {setUserid(value); return value}}
        />
        <AtInput
          name='password'
          title='密码'
          type='password'
          value={password}
          onChange={(value) => {setPassword(value); return value}}
        />
        <AtButton 
          formType='submit'
          type='primary'
          onClick={handleLogin}
        >登录</AtButton>
      </AtForm>
    </>
  )
}

export default Login