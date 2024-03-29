import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './assets/components/Header.tsx'
import Quotes from './assets/components/Quotes.tsx'
import Body from './assets/components/Body.tsx'
import Footer from './assets/components/Footer.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Quotes />
    <Body />
    <Footer />
  </React.StrictMode>,
)
