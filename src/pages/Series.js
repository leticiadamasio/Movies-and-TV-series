import React, {Component} from 'react'
import axios from 'axios' 

const ApiSeries = axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/{tv_id}?api_key=f8ea49f49d2d46462a2c3f5207100daf&language=pt-BR"
})

export default class Series extends Component{

    state = {
      listSeries: []
    }

    async componentDidMount(){
        const response = await ApiSeries.get()
        console.log(response)
    }

render(){
    return(
        <div></div>
    )
  }
}
    