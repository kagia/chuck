import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import PageContainer from './PageContainer'

export default function App() {
  return (
    <Provider store={store}>
      <PageContainer />
    </Provider>
  )
}
