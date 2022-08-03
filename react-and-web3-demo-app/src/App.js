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
            alert("Please connect to MataMask!");
        } else if (accounts[0] !== currentAccount) {
            setProvider(provider);
            setWeb3(web3);
            setChainId(chainId);
            setCurrentAccount(accounts[0]);
            setIsConnected(true);
            setBalance(Number(accBalanceEth).toFixed(10));
        }
    };


    useEffect(() => {

        const handleAccountsChanged = async (accounts) => {
            // const web3Accounts = await web3.eth.getAccounts();
            const accBalanceEth = web3.utils.fromWei(
                await web3.eth.getBalance(accounts[0]), "ether"
            );
            if (accounts.length === 0) {
                // onLogout();
                await logout();
            } else if (accounts[0] !== currentAccount) {
                const web3Accounts = await web3.eth.getAccounts();
                setCurrentAccount(web3Accounts);
                setBalance(Number(accBalanceEth).toFixed(10));
            }
        };

        const handleChainChanged = async (chainId) => {
            const web3ChainId = await web3.eth.getChainId();
            setChainId(web3ChainId);

            // We recommend reloading the page, unless you must do otherwise
            // window.location.reload();
        };

        /*const handleNewAccounts = async (accounts) => {
            const web3Accounts = await web3.eth.getAccounts();
            setCurrentAccount(web3Accounts);
        };*/


        if (isConnected) {
            // provider.on("isConnected", onLogin);
            provider.on("accountsChanged", handleAccountsChanged);
            provider.on("chainChanged", handleChainChanged);
            // provider.on('accountsChanged', handleNewAccounts)
        }
    }, [isConnected]);

/*    const onLogout = () => {
        setIsConnected(false);
        setCurrentAccount(null);
    };*/

    const getCurrentNetwork = (chainId) => {
        return NETWORKS[chainId];
    };

    const logout = async () => {
        /*provider.on("disconnect", (code, reason) => {
            console.log(code, reason);
        });*/
/*        const permissions = await window.ethereum.request({
            method: 'wallet_requestPermissions',
            params: [{
                eth_accounts: {},
            }]
        });*/

        // ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);
        setIsConnected(false);
        setCurrentAccount(null);
        setBalance(0);
        setProvider(null);
        setChainId(null);
        setWeb3(null);
    };

    const changeWallet = async () => {
        provider.request({
            method: 'wallet_requestPermissions',
            params: [
                {
                    'eth_accounts': {
                        requiredMethods: ['signTypedData_v4']
                    }
                }
            ]
        })
            .then((permissions) => {
                console.log(permissions);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <div>
            <header className={"main-header"}>
                <h1>AIxCON</h1>
                <nav className={"nav"}>
                    <ul>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a onClick={changeWallet}>{currentAccount}</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {!isConnected && <Login onLogin={onLogin}/>}
                {isConnected &&
                    <Home
                        currentAccount={currentAccount}
                        currentNetwork={getCurrentNetwork(chainId)}
                        balance={balance}
                        clickLogoutBtn={logout}
                    />
                }
            </main>
        </div>
    );
}

export default App;
