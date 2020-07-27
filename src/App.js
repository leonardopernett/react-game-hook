import React from 'react';
import './App.css';
import styled from 'styled-components'
import Header from './components/header'
import Table from './components/Table';
import Rules from './components/Rules';
const AppStyled = styled.div`
background:#111f43;
font-family: 'Barlow Semi Condensed', sans-serif;
color:#fff;
.content {
  display:flex;
  min-height:100vh;
  box-sizing: border-box;
  flex-direction:column;
  justify-content:space-between;
  padding:2em;
}
`

function App() {
  return (
    <AppStyled >
      <div className="content">
        <Header />
        <Table />
        <Rules />
      </div>
    </AppStyled>
  );
}

export default App;
