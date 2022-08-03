import React, {useEffect} from 'react';
import './App.css';
import MetaMaskAuth from "./metamask-auth";
import MetaMaskLogo from "./favicon.svg";
import aixconlogo from "./img/symbol.png";

function App() {
    return (
        <main>
            <div className="logoContainer">
                {/*<img src={MetaMaskLogo} height={100}/>*/}
                <img src={aixconlogo} height={100}/>
            </div>
            <MetaMaskAuth onAddressChanged={address => {
                console.log(address)
            }}/>
        </main>
    );
}

export default App;
