import React from 'react'
import { Router } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyles'
import Header from './components/Header'
import Routes from './routes'

function App() {
  return (
    < Router >
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  )
}

export default App
