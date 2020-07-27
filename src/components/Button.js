import React from 'react';
import styled from 'styled-components'


const ButtonStyle = styled.div`
   display:inline-flex;
   border:1px solid #fff;
   width:100px;
   justify-content:center;
   padding:.9em;
   border-radius:7px;
   box-sizing:border-box;
   text-transform:uppercase;
   letter-spacing:3px;
   font-size:.7em;
   cursor:pointer;
`

function Button({showHideToggle}) {

    
  return (
    <ButtonStyle onClick={showHideToggle} >
       Rules
    </ButtonStyle>
  );
}

export default Button;
