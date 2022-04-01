import React, { Component } from 'react'
import axios from "axios";
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    input::placeholder {
    color: black;
   }
  }
`
const Container = styled.div`
.rec.rec-arrow:disabled {
    visibility: hidden ;
}
  background-color:#B5838D;
`
const Title = styled.h1`
  color: black;
  font-family: 'Indie Flower', cursive;
  padding-top: 4vh;
  margin-left: 4vh;
  margin-bottom: 4vh;
  font-size: 4.5vh;

`
const Img = styled.img`
  height: 20vw;
`
const ApiSeries = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=f8ea49f49d2d46462a2c3f5207100daf&language=pt-BR"
})

export default class CarouselTV extends Component {
  state = {
    TvList: [],
    filterTv: []
  }

 async componentDidMount() { 
     this.getTv();
  }
  getTv = async () => {
    const response = await ApiSeries.get()

    console.log(response)

    const Series = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w400/${item.poster_path}`
      }
    })
    this.setState({
      TvList: Series,
      filterTv: Series
    })
  }
  render() {
    return (
      <Container>
          <Title>Seção de Series</Title>
        <GlobalStyle/>
        <Carousel itemsToShow={4} enableAutoPlay autoPlaySpeed={3000}>
          {this.state.filterTv.map((item) => (
                    <figure>
                      <Img src={item.poster_path} alt={` Imagem do filme ${item.name}`}/>
                    </figure>
          ))}
        </Carousel>
      </Container>
    )
  }
}