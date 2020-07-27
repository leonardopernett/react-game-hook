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
  background:#fff;
  margin-right:15px;
  z-index:2;
  &:active{
      transform:scale(.9);
  }
`
const colors ={
    paper:{
        base:'#526ef4'
    },
    rock:{
        base:'#de3a5a'
    },
    scissors:{
        base:'#eca81e'
    },

}
export default function Token({name}) {
    return (
        <TokenStyle color={colors[name]}>
           <img src={`./images/icon-${name}.svg`} alt=""/>
        </TokenStyle>
    )
}
  