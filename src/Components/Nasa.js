import React from 'react';
import styled from 'styled-components'
const Styled = styled.div `
.App {
    text-align: center;
  }
  .Title {
    font-size: 40px;
    color:blue;
    font-style: italic;
    text-align:center;
  }
  .Date{
    color:red;
    font-size: 30px;
    font-style: oblique;
    text-align:center;
  }
  .pic-cont{
    width: 50%;
    height: 50%;
    object-fit: cover;
    overflow: hidden;
    margin: auto;
    border-radius: 25%;
  }
  .paraCont{
    width: 80%;
    margin: auto;
    background-color:blue;
    padding: 5%;
    border-radius: 25%;
  }
  .paraCont p {
    color: aliceblue;
  }
  .siteCont{
    margin-top: -3.5%;
    padding-bottom:50%;
   }
   .link{
    color:white;
    margin-left:50%;
  }
  }
`

export default function Nasa(props){
    const{title,date,explanation,url,hdurl}=props.props
    return(
        <Styled className="container">
        <div className="siteCont">
            <h2 className="Title">{title}</h2>
            <p className="Date">{date}</p>
            {console.log(title)}
            <div className="pic-cont">
            <img className=".img" src={url}/>
            <a className="link" href={hdurl}>Click for HD</a>
            </div>
            <div className='paraCont'>
            <p>{explanation}</p>
            
            </div>
        </div>
        </Styled>
    )};