import React, { Component } from "react";
import styled from "styled-components";

const Rodapé = styled.div`
  background-color: #6D6875;
  height: 7vh;
`

export default class Footer extends Component{ 
   render(){
       return(
           <Rodapé></Rodapé>
       )
   }
}