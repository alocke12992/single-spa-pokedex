import React from 'react'
import { Provider } from 'react-redux'
import Page from './containers/Page'
import './style/main.css'
import configureStore from './store/configureStore'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <Page />
  </Provider>
)

export default Root;
