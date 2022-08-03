import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <div className={"container"}>
                <div className={"row"}>
                  <form className={"col-lg-5"}>
                    <h4>Mint Portal</h4>
                    <h5>Please connect your wallet</h5>
                    <Button>Connect Wallet</Button>

                      <div className={"card"} id={"wallet-address"}>
                          <label for={"floatingInput"}>Wallet Address</label>
                          <input type={"number"} name={"amount"} defaultValue={"1"} min={"1"} max={"5"}/>
                          <label>Please select the amount of NFTs to mint</label>
                      </div>
                  </form>
                </div>
            </div>
        </div>
    );
}

export default App;
