import React from 'react';
import styled from 'styled-components';
window.addEventListener('resize', ()=>{window.location.reload(true);});
const Styled = styled.div `
.App-header{
background-color: #282c34;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
padding-top: 1%;
padding-bottom: 2.3%;
}
.App-link{
    color: black;
    margin-right:10%;
    padding-right:1%;
    padding-left:1%;
    padding-top:.5%;
    padding-bottom:.5%;
    text-align:center;
  }
`
export default function Header(){
    return(
        <div>
            <nav>
                <Styled>
                <div className="App-header">
                <button className="App-link" href="home" >Home</button>
                <button className="App-link" href="home">About</button>
                <button className="App-link" href="home">API</button>
                <button className="App-link" href="home">NASA</button>
                </div>
                </Styled>
            </nav>
        </div>
    )
}
