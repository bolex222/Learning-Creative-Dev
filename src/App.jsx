import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import MouseFollower from './components/ui/MouseFollower'
import RoundTransition from './pages/Roundtransition'
import './App.scss'

function App () {

  const renderMouseFollower = () => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      return <MouseFollower/>
    }
  }
  return (
    <div className="App">
        <Router>
          <Route path="/" component={Home}/>
          <Route path="/round-transition" component={RoundTransition}/>
        </Router>
      {renderMouseFollower()}
    </div>
  )
}

export default App
