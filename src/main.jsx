import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { GlobalStyle } from './globalStyles'

import { SocialsProvider } from './SocialsContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SocialsProvider>
      <App />
    </SocialsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
