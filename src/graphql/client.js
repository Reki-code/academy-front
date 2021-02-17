import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import Taro from '@tarojs/taro'

const fetch = (url, { body: data, ...fetchOptions }) => Taro.request({
  url, data, ...fetchOptions, dataType: 'txt', responseType: 'text',
})
  .then((res) => {
    res.text = () => Promise.resolve(res.data)
    return res
  })

const uri = 'http://192.168.1.10:4000'

if (process.env.TARO_ENV === 'h5') {
  console.log('client init in h5')
} else if (process.env.TARO_ENV === 'weapp') {
  console.log('client init in weapp')
}

const httpInit = process.env.TARO_ENV === 'h5'
  ? { uri }
  : { uri, fetch }
const httpLink = new HttpLink(httpInit)

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client
