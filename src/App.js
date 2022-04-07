import React from 'react'

import './app.css'

import { Navbar } from './components'
import { About, Collection, Footer, Header, Instagram } from './containers'

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <About />
        <Collection />
        <Instagram />
        <Footer />
    </div>
  )
}

export default App