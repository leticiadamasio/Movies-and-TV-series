import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.section`
  background-color:#B5838D;
  height:100%;
  width:100%;
  align-items: center;

`
const Navegation = styled.div`
  display: flex;
  padding-top: 3vh;
  margin-left: 10vw;
`
const Title = styled.h1`
  color: black;
  font-family: 'Indie Flower', cursive;
`
const Buscar = styled.input`
  margin-left: 50%;
  border: solid 2px #Fdf0d5;
  background-color: #Fdf0d5;
  color: black;
  padding-left: 2vh;
`
const Content = styled.div`
  width:100%;
  justify-content: center;
  ul {
   width: 50%;
   margin: 0 auto;
   padding-bottom: 5vh;
}
`
const Film = styled.div`
  display: flex;
  align-items: center;
`
const Filmsname = styled.h4`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 3vh;
  color: black;
  margin-top: 4vh;
  margin-left:2%;
`
const Decoration = styled.span`
  color: black;
  text-decoration: overline;
  border-bottom: solid 1px black;
  margin-left: 0.5vw;
`
const Poster = styled.img`
  height: 30vh;
  margin-left: 2vw;
  margin-top: 2.4vh;
  &:hover{
    cursor: pointer;
    height: 45vh;
  }
`
const Text = styled.div`
  height: 20.75vh;
  width: 80%;
  overflow: auto;
  cursor: pointer;

::-webkit-scrollbar {
  width: 2vh;
}

::-webkit-scrollbar-track {
  background: #FFB4A2;
}

::-webkit-scrollbar-thumb {
  background-color: #E5989B;
  border: 3px solid #FFCDB2;
}
 p{
  color: black;
  text-align: justify;
  margin-left: 1vw;
  font-family: 'Poppins', sans-serif;
}
`
const Icone = styled.img`
  height: 4vh;
  margin-right: 0.5vw;

`
const Classification = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  margin-left: 1vw;
  margin-top: 0.5vh;
  p{
   color: black;
   text-align: justify;
   font-family: 'Poppins', sans-serif;
}
`

const ApiSeries = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=f8ea49f49d2d46462a2c3f5207100daf&language=pt-BR"
})

export default class Series extends Component {

  state = {
    listSeries: [],
    seriesBuscadas: []
  }

  componentDidMount() {
    this.getSeries()
  }

  getSeries = async () => {
    const response = await ApiSeries.get()
    console.log(response.data.results)
    const Series = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      }
    })
    this.setState({
      listSeries: Series,
      seriesBuscadas: Series
    })
  }
  filter = (event) => {
    const { listSeries } = this.state
    const SeriesFiltradas = listSeries.filter((item) => {
      if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    })
    this.setState({
      seriesBuscadas: SeriesFiltradas
    })
  }
  render() {
    return (
      <Container>
        <Navegation>
          <Title>Séries</Title>
          <Buscar type="text" placeholder=' Buscar séries...' onChange={this.filter} />
        </Navegation>
        <Content>
          {this.state.seriesBuscadas.map((item) => (
            <ul key={item.id}>
              <li><Filmsname>{item.name} <Decoration>{item.vote_average}</Decoration></Filmsname></li>
              <Film>
                <li>
                  <Poster src={item.poster_path} alt={`Banner do filme: ${item.name}`} />
                </li>
                <li><Text><p>{item.overview}</p></Text>
                  {item.adult ? 'Esse filme tem classificação para adultos' :
                    <Classification>
                      <Icone src="https://logodownload.org/wp-content/uploads/2017/07/classificacao-livre-logo-1.png" alt="Classificação Livre" />
                      <p>Esse filme possui uma classificação Livre.</p>
                    </Classification>}
                </li>
              </Film>

            </ul>
          ))
          }
        </Content>
      </Container>
    )
  }
}

