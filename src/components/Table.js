import React from 'react'
import styled from 'styled-components'
import Token from './Token'

const TableStyle = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  position:relative;
  .line{
      position:absolute;
      height:10px;
      background:rgba(0,0,0, .6);
      left:60px;
      right:60px;
      top:60px;
  }

  .line::before{
    content:'';
    position:absolute;
    height:10px;
    background:rgba(0,0,0, .6);
    left:0px;
    right:0px;
    top:0px;
    transform:rotate(60deg);
    transform-origin: left top;
}

 .line::after{
    content:'';
    position:absolute;
    height:10px;
    background:rgba(0,0,0, .6);
    left:0px;
    right:0px;
    top:0px;
    transform:rotate(-60deg);
    transform-origin: right top;
}
`

export default function Table() {
    return (
        <TableStyle>
            <div className="line"></div>
           <Token name='paper'  />
           <Token  name='scissors' />
           <Token  name='rock' />
        </TableStyle>
    )
}
