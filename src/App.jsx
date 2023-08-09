import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-white">
    <Header/>
    <Home/>
    <Footer/>
    </div>
  )
}

export default App
