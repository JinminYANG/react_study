import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import {useEffect, useState} from "react";

const Login = (props) => {

    const [isConnecting, setIsConnecting] = useState(false);
    const [provider, setProvider] = useState(window.ethereum);

    const isMobileDevice = () => {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    };

    useEffect(() => {
        if (isMobileDevice()) {
            connectDeepLink();
        } else {
            setProvider(detectProvider());
        }
    }, []);

    useEffect(() => {
        if (provider) {
            if (provider !== window.ethereum) {
                alert("Not window.ethereum provider. Do you have multiple wallets installed?");
            }
        }
    }, [provider]);


    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            alert("No Ethereum browser detected! Check out MetaMask");
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

    const connectDeepLink = () => {
        const dappUrl = "jinminyang.github.io/metamask-v2"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
        const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;

        return window.open(metamaskAppDeepLink);
    }


    return (
        <Card className={classes.login}>
            <button onClick={onLoginHandler} className={classes.button} type={"button"}>
                {!isConnecting && "Connect"}
                {isConnecting && "Loading..."}
            </button>
        </Card>
    )
}

export default Login;
