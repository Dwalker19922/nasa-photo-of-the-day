import React from 'react'
import Header from './Header'
import styled from 'styled-components'
const Styled = styled.div `
.copy{
    color: #61dafb;
    padding:3%;
    padding-bottom:3%;
    padding-top: 1%;
    margin-top:-.5%;
    text-align:center
  }
`
export default function Footer (props){
    const{copyright}=props.props
return(
<Styled className="container" >
<div className="copyDiv">
    <Header/>
<p className='copy'>copyright: {copyright}</p>
</div>
</Styled>
)
}