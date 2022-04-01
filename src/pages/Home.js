import React, { Component } from 'react'
import styled from 'styled-components'
import CarouselMovies from './Carousel-Movies'
import CarouselTV from './Carousel-Tv'

const Container = styled.div`
`

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselMovies/>
        <CarouselTV/>
      </div>
    )
  }
}