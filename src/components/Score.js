import React from 'react'
import styled from 'styled-components'


const ScoreStyled = styled.div`
  background:#fff;
  padding:10px 15px;
  border-radius:5px;
  text-align:center;
  width:60px;
  span {
      color:#2a45c2;
      text-transform:uppercase;
      font-size:10px;
  }
  p{
      color:#565488;
      margin:0;
      padding:0;
      font-size:40px;
      font-weight:700;
      display:block;
  }
`

export default function Score() {
    return (
            <ScoreStyled>
               <span>Score</span>
               <p>12</p>
            </ScoreStyled>
    )
}
