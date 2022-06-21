import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import {useState, useEffect} from "react";
import Web3 from "web3";

function App() {
    const [isConnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [balance, setBalance] = useState(0);
    const [provider, setProvider] = useState(window.ethereum);
    const [chainId, setChainId] = useState(null);
    const [web3, setWeb3] = useState(null);

    const NETWORKS = {
        1: "Ethereum Main Network",
        3: "Ropsten Test Network",
        4: "Rinkeby Test Network",
        5: "Goerli Test Network",
        42: "Kovan Test Network",
    };

    const onLogin = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        const chainId = await web3.eth.getChainId();
        const accBalanceEth = web3.utils.fromWei(
            await web3.eth.getBalance(accounts[0]), "ether"
        );

        if (accounts.length === 0) {
            console.log("Please connect to MataMask!");
        } else if (accounts[0] !== currentAccount) {
            setProvider(provider);
            setWeb3(web3);
            setChainId(chainId);
            setCurrentAccount(accounts[0]);
            setIsConnected(true);
            setBalance(Number(accBalanceEth).toFixed(10));
        }
    };

    /*const isLogin = async (provider) => {
        const accounts = await web3.eth.getAccounts();

        if (provider) {
            setProvider(provider);
            setWeb3(web3);
            setChainId(chainId);
            setCurrentAccount(accounts[0]);
            setIsConnected(true);
            return true;
        } else {
            return false;
        }

    };*/

    /*function checkAccountIsConnected() {
        console.log("로그인 체크");

        if (window.ethereum) {
            const accounts = window.ethereum.request({
                method: "eth_accounts",
            });
            console.log(window.ethereum);
            console.log(accounts);

            if (accounts.length > 0) {
                const accBalanceEth = web3.utils.fromWei(
                    web3.eth.getBalance(accounts[0]), "ether"
                );

                setProvider(provider);
                setWeb3(web3);
                setChainId(chainId);
                setCurrentAccount(accounts[0]);
                setIsConnected(true);
                setBalance(Number(accBalanceEth).toFixed(10));
            }
        }
    }*/

    async function checkIfAccountsIsConnected({setCurrentAccount}) {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            console.log(accounts);

            if (accounts.length > 0) {      // 계정이 연결되었으면
                const account = accounts[0];
                // ethereum의 메소드를 통해 받아온 accounts의 값 중 계정정보가 들어있는 배열의 0번째 인덱스에 존재하는 값을 사용
                setCurrentAccount(account);
                return;
            }

        }
    }

    useEffect(() => {

        const handleAccountsChanged = async (accounts) => {
            // const web3Accounts = await web3.eth.getAccounts();
            const accBalanceEth = web3.utils.fromWei(
                await web3.eth.getBalance(accounts[0]), "ether"
            );
            if (accounts.length === 0) {
                onLogout();
            } else if (accounts[0] !== currentAccount) {
                setCurrentAccount(accounts[0]);
                setBalance(Number(accBalanceEth).toFixed(10));
            }
        };

        const handleChainChanged = async (chainId) => {
            const web3ChainId = await web3.eth.getChainId();
            setChainId(web3ChainId);

            // We recommend reloading the page, unless you must do otherwise
            // window.location.reload();
        };


        if (isConnected) {
            // provider.on("isConnected", onLogin);
            provider.on("accountsChanged", handleAccountsChanged);
            provider.on("chainChanged", handleChainChanged);
        } else {
            const isLogin =  checkIfAccountsIsConnected(setCurrentAccount);
            console.log(isLogin);
            if (isLogin !== null) {
                setIsConnected(true);
            }

        }
    }, [isConnected]);

    const onLogout = () => {
        setIsConnected(false);
        setCurrentAccount(null);
    };

    const getCurrentNetwork = (chainId) => {
        return NETWORKS[chainId];
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
                {/*{!isLogin && <div>로그인 X</div>}*/}
                {/*{isLogin && <div>로그인 O</div>}*/}
                {!isConnected && <Login onLogin={onLogin} onLogout={onLogout}/>}
                {isConnected &&
                    <Home
                        currentAccount={currentAccount}
                        currentNetwork={getCurrentNetwork(chainId)}
                        balance={balance}
                    />
                }
            </main>
        </div>
    );
}

export default App;
