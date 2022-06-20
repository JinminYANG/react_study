import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import {useState} from "react";
import Web3 from "web3";

function App() {

    const [isConnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);

    const onLogin = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
            console.log("Please connect to MataMask!");
        } else if (accounts[0] !== currentAccount) {
            setCurrentAccount(accounts[0]);
            setIsConnected(true);
        }
    };

    const onLogout = () => {
        setIsConnected(false);
    };

    return (
        <div>
            <header className={"main-header"}>
                <h1>React &amp; Web3</h1>
                <nav className={"nav"}>
                    <ul>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>{currentAccount}</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}
                {isConnected && <Home currentAccount={currentAccount}/>}
            </main>
        </div>
    );
}

export default App;
