import classes from "./Home.module.css";
import Card from "../UI/Card/Card";

const Home = (props) => {
    return (
        <>
            <Card className={classes.home}>
                <h1>Welcome</h1>
                <p>Wallet Address : {props.currentAccount}</p>
                <p>Current Network : {props.currentNetwork}</p>
                <p>Balance : {props.balance}</p>
            </Card>
            <div className={classes.btns}>
                <button className={classes.logout} onClick={props.clickLogoutBtn}>Logout</button>
            </div>
        </>
    )
}

export default Home;
