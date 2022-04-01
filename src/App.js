import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Footer from './pages/Footer'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style:none;
  text-decoration:none;
  color: white;
}
`
const Menu = styled.nav`
  width: 100%;
  background-color: #502f4c;
`
const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-size: 4vh;
  height: 7vh;
  align-items: center;
  font-family: 'Indie Flower', cursive;
  font-weight: bolder;
`
export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Menu>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Filmes</Link>
            </li>
            <li>
              <Link to="/series">Séries</Link>
            </li>
          </List>
        </Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
        <Footer />
      </Router>



    );
  }
}
