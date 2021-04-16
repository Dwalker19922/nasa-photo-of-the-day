  
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Header from './Components/Header'
import Nasa from './Components/Nasa'
import Footer from './Components/Footer';
function App() {
  const [ nasaData, setNasaData ] = useState([])

  const fetchPhoto = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=MCqvuHNbv5hxTRD1jSRZJqrcQnlsQmsFoxgfYdba")
      .then(response => {
        console.log(response)
        setNasaData(response.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(fetchPhoto, [])
  
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
        <Header nasa= {nasaData}/>
        <Nasa props= {nasaData}/>
        <Footer props= {nasaData}/>
    </div>
  );
}

export default App;
