/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Demo from './demo'

// https://webpack.js.org/guides/hmr-react/#components/sidebar/sidebar.jsx
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
render(Demo)

if (module.hot) {
  module.hot.accept('./demo', () => render(require('./demo').default))
}