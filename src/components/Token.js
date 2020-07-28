import React from 'react'
import styled from 'styled-components'


const TokenStyle = styled.div`
  width:110px;
  height:110px;
  border: 15px solid ${(props)=>props.color.base};
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  background: ${(props)=>props.color.background};
  margin-right:15px;
  z-index:2;
  &:active{
      transform:scale(.9);
  }
`
const colors ={
    paper:{
        base:'#526ef4',
        background:'#fff'
    },
    rock:{
        base:'#de3a5a',
        background:'#fff'
    },
    scissors:{
        base:'#eca81e',
        background:'#fff',
    },
     default:{
        base:'#122343',
        background:'#122343',
    },

}
export default function Token(props) {
    const hanlderClick = ()=>{
        let listado = ['paper', 'rock', 'scissors'];
        let aleatorio = Math.floor(Math.random()*(listado.length));
        let seleccion = listado[aleatorio];
        console.log(seleccion)
        props.clickButton(props.name, seleccion)
        
    }
    const colores = colors[props.name] || colors.default
    return (
        <TokenStyle color={colores}>
           <img onClick={hanlderClick} src={`./images/icon-${props.name}.svg`} alt=""/>
        </TokenStyle>
    )
}
  