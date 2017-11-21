import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './app'

const wrapper = document.querySelector('#untitled')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  wrapper
)

if (module.hot) {
  module.hot.accept('./app', () => {
    const HotAppLoader = require('./app').default
    render(
      <AppContainer>
        <HotAppLoader />
      </AppContainer>,
      wrapper
    )
  })
}