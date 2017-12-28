import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'
import App from './app'

const wrapper = document.querySelector('#untitled')

render(
  <AppContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContainer>,
  wrapper
)

if (module.hot) {
  module.hot.accept('./app', () => {
    const HotAppLoader = require('./app').default
    render(
      <AppContainer>
        <BrowserRouter>
          <HotAppLoader />
        </BrowserRouter>
      </AppContainer>,
      wrapper
    )
  })
}