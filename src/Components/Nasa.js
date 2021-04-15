import React from 'react';

export default function Nasa(props){
    const{title,date,explanation,url,hdurl}=props.props
    return(
        <div className="siteCont">
            <h2 className="Title">{title}</h2>
            <p className="Date">{date}</p>
            {console.log(title)}
            <div className="pic-cont">
            <img src={url}/>
            <a className="link" href={hdurl}>Click for HD</a>
            </div>
            <div className='paraCont'>
            <p>{explanation}</p>
            
            </div>
        </div>
    )};