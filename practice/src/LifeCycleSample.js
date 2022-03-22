import React, {Component} from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null;   // ref 설정할 부분

    // 초기 state 정의
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // 컴포넌트가 마운트될 때와 업데이트될 때 호출
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }

        return null;
    }

    // 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
    componentDidMount() {
        console.log('componentDidMount');
    }

    // props, state를 변경했을 때, 리렌더링을 시작할지 여부를 지정
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;    // 마지막 자리의 숫자가 4면 리렌더링하지 않는다.
    }

    // 
    componentWillMount() {
        console.log('componentWillMount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // 렌더에서 만들어진 결과물이 브라우저에 실제로 반영되기 전에 호출
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }

        return null;
    }

    // 리렌더링 완료 후 실행
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState)
        if (snapshot) {
            console.log('업데이트되기 직전 생산: ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}


export default LifeCycleSample;
