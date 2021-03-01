import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { AtForm, AtButton, AtInput } from 'taro-ui'
import { Router } from 'tarojs-router'
import Taro from '@tarojs/taro'
import { useMutation } from '@apollo/client'
import { WX_LOGIN, BIND_WX } from '../../graphql/queries'

import './Login.scss'

const Login = () => {
  const [wxlogin, wxloginResult] = useMutation(WX_LOGIN)
  const [bindWx, bindResult] = useMutation(BIND_WX)
  useEffect(() => {
    try {
      const token = Taro.getStorageSync('user-token')
      if (token) { // if fonud Token
        Router.navigate(
          { url: '/pages/Detail/Detail' },
          { params: { token } },
        )
      } else { // not found Token
        Taro.login()
          .then(res => {
            wxlogin({ // login with wx
              variables: { code: res.code },
            })
          })
      }
    } catch (e) {
      console.error(e)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    console.log('wxlogin result', wxloginResult)
    if (wxloginResult.data && wxloginResult.data.wxLogin) {
      const token = wxloginResult.data.wxLogin.value
      console.log(wxloginResult)
      Taro.setStorageSync('user-token', token)
      Router.navigate(
        { url: '/pages/Detail/Detail' },
        { params: { token: wxloginResult.data.value } },
      )
    }
  }, [wxloginResult])
  const [userid, setUserid] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    console.log('bind result', bindResult)
    if (bindResult.data) {
      const token = bindResult.data.bindWx
      if (token) {
        Taro.setStorageSync('user-token', token.value)
        Router.navigate(
          { url: '/pages/Detail/Detail' },
          { params: { token: token.value } },
        )
      } else {
        Taro.atMessage({
          message: `密码错误`,
          type: 'warning',
        })
      }
    }
  }, [bindResult])
  if (wxloginResult.loading) return <Text>loading</Text>
  if (wxloginResult.error) {
    Taro.atMessage({
      message: `error${wxloginResult.error.message}`,
      type: 'warning',
    })
  }
  const handleLogin = () => {
    console.log('bind wx')
    Taro.login()
      .then(res => {
        const code = res.code
        console.log(code)
        bindWx({
          variables: {
            username: userid,
            password,
            code,
        }})
      })
  }
  
  return (
    <View className='login'>
      <Text>
        在线学堂
      </Text>
      <AtForm>
        <AtInput
          autoFocus
          name='userid'
          title='学号/工号'
          type='text'
          value={userid}
          onChange={(value) => { setUserid(value); return value }}
        />
        <AtInput
          name='password'
          title='密码'
          type='password'
          value={password}
          onChange={(value) => { setPassword(value); return value }}
        />
        <AtButton
          onClick={handleLogin}
          type='primary'
          loading={bindResult.loading}
        >
          登录
        </AtButton>
      </AtForm>
    </View>
  )
}

export default Login
