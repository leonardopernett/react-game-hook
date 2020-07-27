import React ,{useState} from 'react';
import styled from 'styled-components'
import Button from './Button'
const RulesStyle = styled.div`

  text-align:center;
  &:active{
      transform:scale(.9);
  }

  .rules-overline{
      position:fixed;
      left:0;
      right:0;
      top:0;
      bottom:0;
      background:#fff;
      z-index:2;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      transition: all .5s;
      h2{
          color:#000;
          text-transform:uppercase;
      }
  }
`

export default function Rules() {
    const [visible, setvisible] = useState(false)
    function showHideToggle() {
        setvisible(!visible)
    }

    const hideRules = ()=> console.log('ddde')
  return (
    <RulesStyle>
        {
            (visible) ? (
                <div className="rules-overline">
                   <h2>Rules</h2>
                   <img  src='./images/image-rules.svg'  alt="" />  
                   <button onClick={hideRules}>salir</button>
               </div>
            ):""
        }
      <Button showHideToggle={showHideToggle}  />
     </RulesStyle>
  );
}

