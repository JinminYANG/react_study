import React, {useEffect} from 'react';
import './App.css';
import MetaMaskAuth from "./metamask-auth";
import MetaMaskLogo from "./favicon.svg";
import aixconlogo from "./img/symbol.png";

function App() {
    // const [changeWallet, setChangeWallet] = useState("");

    useEffect(() => {
        if (window.ethereum) {
            console.log(window.ethereum);

            window.ethereum.on('chainChanged', () => {
                console.log("dzdzdzdz");
                window.location.reload();
            });

            window.ethereum.on('handleChainChanged', () => {
                console.log("dzdzdzdzzzzzz");
                window.location.reload();
            });

            window.ethereum.on('계정 변경', () => {
                window.location.reload();
            });
        }
    }, [window.ethereum]);

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