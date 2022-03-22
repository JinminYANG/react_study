import React, {Component, useState} from "react";
import './App.css';
import EventPracticeClass from "./EventPracticeClass";
import {EventPracticeFunction} from "./EventPracticeFunction";
import {EventPracticeFunctionForm} from "./EventPracticeFunctionForm";
import {ValidationSample} from "./ValidationSample";
import {RefSample} from "./RefSample";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import Info from "./Info";
import Counter from "./Counter";



class Subject extends Component {
    render() {
        return (
            <header>
                <h1>WEB</h1>
                world wide web!
            </header>
        );
    }
}

class TOC extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return(
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language.
            </article>

        );
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
/*

class App extends Component {
/!*    state = {
        color: '#000000'
    }

    handleCLick = () => {
        this.setState({
            color: getRandomColor()
        });
    }*!/

    render() {
        return (
            /!*<div className="App">
                <Subject></Subject>]
                <TOC></TOC>
                <Content></Content>
            </div>*!/
/!*            <div>
                <button onClick={this.handleCLick}>랜덤 색상</button>
                <LifeCycleSample color={this.state.color}></LifeCycleSample>
            </div>*!/
            <Info></Info>
        );
    }
}
*/

const App = () => {
/*
    const [visible, setVisible] = useState(false);

    return(
        <div>
            <button
                onClick={() => {
                    setVisible(!visible)
                }}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <Info></Info>}
        </div>
    );
*/

    // return <Counter></Counter>

    return <Info></Info>

};

export default App;
























