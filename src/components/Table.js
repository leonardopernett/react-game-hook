import React,{useState} from 'react'
import styled from 'styled-components'
import Token from './Token'

const TableStyle = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  position:relative;
  p{
      text-align:center
  }

  .line{
    //   display:${({player})=>!player ? 'inline-block':'none'};
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
  const [player, setPlayer]=useState(false)
  const [pick, setPick]=useState("")
  const [computer, setComputer]= useState("");
    const clickButton = (name, seleccion)=>{
      setPlayer(true)
      setPick(name)
      setComputer(seleccion)
    }
    return (
        <TableStyle>
              
            { !player ? (
                <>
                     <div className="line"></div>
                    <Token name='paper' clickButton={clickButton} />
                    <Token  name='scissors' clickButton={clickButton} />
                    <Token  name='rock' clickButton={clickButton} />
                </>
            ):(
                <>
                <div>
                    <Token  name={pick}  />
                    <p> you picked</p>
                </div>
                <div>
                    <Token name={computer} />
                    <p >the house picked</p>
                </div>
                </>
            )
             
            }
        </TableStyle>
    )
}
