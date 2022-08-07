import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Vehicles from './views/vehicles'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Vehicles} path="/vehicles" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
