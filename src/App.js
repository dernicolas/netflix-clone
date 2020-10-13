import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/LoginPage/Login';
import Browse from './components/BrowsePage/Browse';
class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/browse' component={Browse} />
        </div>
      </Router>
    )
  }
}

export default App
