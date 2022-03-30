import React, {Component} from 'react'
import axios from 'axios' 
const ApiFilmes = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=f8ea49f49d2d46462a2c3f5207100daf&language=pt-BR"
})
export default class Movies extends Component{

  state = {
    listFilmes: []
  }

  async componentDidMount(){
    const response = await ApiFilmes.get()
    //console.log(response.data.results)

    const Filmes = response.data.results.map((item)=> {
      return{
        ...item,
        backdrop_path: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
       
      }
    })
  

  this.setState({
    listFilmes: Filmes
  })

  }
  render(){
    return(
      <div>
        {this.state.listFilmes.map((item) => (
         <ul key={item.id}>
           <li>{item.title}</li>
           <li>
             <img src={item.backdrop_path} alt={`Banner do filme: '${item.title}`}/>
           </li>
           <li>{item.overview}</li>
         </ul>
        ))}
      </div>
    )
  }
}
