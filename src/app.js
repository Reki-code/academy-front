import React from 'react'
import { ApolloProvider } from '@apollo/client'
import 'taro-tailwind/dist/tailwind.css'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import client from './graphql/client'

const App = ({ children }) => (
  <ApolloProvider client={client}>
    { children }
  </ApolloProvider>
)

export default App
