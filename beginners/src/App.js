import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import {func} from "prop-types";

function Hello() {

    useEffect(() => {
        console.log("created!");
        return () => console.log("destroyed... ");      // called by 'Cleanup Function'
    }, []);


    return <h1>Hello</h1>;
}

function App() {

    const [showing, setShowing] = useState(false);
    const onLClick = () => setShowing((prev) => !prev);

    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onLClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;


/*
* App 컴포넌트
* Node.js로 작업하고 있기 때문에 파일들을 각각 분리 시키는게 가능하고, 조직적을 구성할 수 있다.
* */

function App_v1() {


    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    useEffect(() => {
        console.log("I run only once");
    }, []);

    useEffect(() => {
        console.log("I run when 'keyword' changes.");
    }, [keyword]);

    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);

    useEffect(() => {
        console.log("I run when 'keyword & counter' changes.");
    }, [keyword, counter]);

    return (
        <div>
            <input type="text" placeholder="Search here..." onChange={onChange} value={keyword}/>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me</button>

            {/*<h1 className={styles.title}>Welcome back!</h1>*/}
            {/*<Button text={"Continue"}/>*/}
        </div>
    );
}






