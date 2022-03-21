import {Component, useState} from "react";

class EventPracticeClass extends Component {

    state = {
        username : '',
        message : ''
    }

    handleChange = (e) => {
        this.setState({
            // message: e.target.value
            [e.target.name]: e.target.value // 이 부분이 핵심!
        })
    }

    handleClick = () => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username: '',
            message : ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }




    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type={"text"}
                    name={"username"}
                    placeholder={"사용자명"}
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type={"text"}
                    name={"message"}
                    placeholder={"아무거나 입력해보세요"}
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPracticeClass;