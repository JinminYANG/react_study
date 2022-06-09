import './App.css';
import {useState} from "react";
import {ethers} from "ethers";

function App() {

    const [walletAddress, setWalletAddress] = useState("");

    async function requestAccount() {
        console.log("Requesting account...");

        if (window.ethereum) {
            console.log('detected');

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.log("Error connecting...");
            }
        } else {
            alert('Meta Mast not detected');
        }
    }

    async function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
        }
    }

    /*    const transactionParameters = {
            nonce: '0x00', // ignored by MetaMask
            gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
            gas: '0x2710', // customizable by user during MetaMask confirmation.
            to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            value: '0x00', // Only required to send ether to the recipient from the initiating external account.
            data:
                '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
            chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
        };

        // txHash is a hex string
        // As with any RPC call, it may throw an error
        const txHash = window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });*/

    async function SendEth() {
        window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: walletAddress,
                        to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                        value: '0x29a2241af62c0000',
                        gasPrice: '0x09184e72a000',
                        gas: '0x2710',
                    },
                ],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error(error));
    }


    return (
        <div className="App">
            <button onClick={requestAccount}>Request Account</button>
            <button onClick={connectWallet}>Connect Wallet</button>
            <h3>Wallet Address: {walletAddress}</h3>

            <button onClick={SendEth}>Send Eth.</button>
        </div>
    );
}

export default App;
