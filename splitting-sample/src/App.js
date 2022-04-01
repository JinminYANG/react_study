import logo from './logo.svg';
import './App.css';
import notify from "./notify";
import React, {Component, useState, Suspense} from "react";
import loadable from "@loadable/component";


/*
class App extends Component {
    state = {
        SplitMe: null
    };

    handleClick = async () => {
        const loadedModule = await import('./SplitMe');
        this.setState({
            SplitMe: loadedModule.default
        });
    };

    render() {
        const {SplitMe} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p onClick={this.handleClick}>Hello React!</p>
                    {SplitMe && <SplitMe/>}
                </header>
            </div>
        );
    }

}
*/

// const SplitMe = React.lazy(() => import('./SplitMe'));
const SplitMe = loadable(() => import('./SplitMe'));

function App () {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    const onMouseOver = () => {
        SplitMe.preload();
    };

    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <img src={logo} className="App-logo" alt="logo"/>
                <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
                {/*<Suspense fallback={<div>loading...</div>}>
                    {visible && <SplitMe/>}
                </Suspense>*/}
                {visible && <SplitMe/>}
            </header>
        </div>
    )
}

export default App;

// import() 함수를 사용하면 Promise를 반환한다.
// 표준 자바스크립트 문법은 아니다.