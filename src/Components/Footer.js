import React from 'react'
import Header from '../Components/Home'
export default function Footer (props){
    const{copyright}=props.props
return(
<div className="copyDiv">
    <Header/>
<p className='copy'>copyright: {copyright}</p>
</div>
)
}