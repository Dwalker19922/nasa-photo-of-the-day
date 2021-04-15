import React from 'react';

export default function Header(){
    return(
        <div>
            <nav>
                <div className="App-header">
                <button className="App-link" href="home" >Home</button>
                <button className="App-link" href="home">About</button>
                <button className="App-link" href="home">API</button>
                <button className="App-link" href="home">NASA</button>
                </div>
            </nav>
        </div>
    )
}