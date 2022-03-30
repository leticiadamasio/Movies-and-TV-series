import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import Movies from './pages/Movies'
import Series from './pages/Series'

export default class App extends Component{
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>            
          </ul>
        </nav>
      
        <Routes>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
        </Routes>
      </Router>
    );
  }
}
