import React from 'react'
import styled from 'styled-components'
import Score from './Score'

const HeaderStyled = styled.div`
  border:3px solid rgba(255,255,255, .29);
  border-radius:5px;
  color #fff;
  max-width:359px;
  padding:12px 12px 12px 23px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  h1{
      margin:0;
      font-size:16px;
      line-height:16px;
      font-weight:700;
      width:30px;
      text-transform:uppercase
  }
`

export default function header() {
    return (
            <HeaderStyled>
                <h1>Rock Papper Scissors</h1>
               <Score />
            </HeaderStyled>
    )
}
