import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import {useEffect, useState} from "react";

const Login = (props) => {

    const [isConnecting, setIsConnecting] = useState(false);
    const [provider, setProvider] = useState(window.ethereum);
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

    const isMobileDevice = () => {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    };

    useEffect(() => {
        setProvider(detectProvider());
    }, []);

    useEffect(() => {
        if (provider) {
            if (provider !== window.ethereum) {
                console.error("Not window.ethereum provider. Do you have multiple wallets installed?");
            }
            setIsMetaMaskInstalled(true);
        }
    }, [provider]);


    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
            // console.log(provider);
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else if(isMobileDevice()){
            const dappUrl = "18.207.114.82"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
            const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        }
        else {
            console.warn("No Ethereum browser detected! Check out MetaMask");
        }

        return provider;
    };

    const onLoginHandler = async () => {
        setIsConnecting(true);
        await provider.request({
            method: "eth_requestAccounts",
        });
        setIsConnecting(false);
        props.onLogin(provider);
    };

    return (
        <Card className={classes.login}>
            {isMetaMaskInstalled &&
                <button onClick={onLoginHandler} className={classes.button} type={"button"}>
                    {!isConnecting && "Connect"}
                    {isConnecting && "Loading..."}
                </button>}
            {!isMetaMaskInstalled &&
                <p>
                    <a href={"https://metamask.io/download/"}>Install MetaMask</a>
                </p>
            }
        </Card>
    )
}

export default Login;