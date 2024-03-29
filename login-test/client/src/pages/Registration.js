import React, {useEffect, useState} from "react";
import Axios from "axios";
import "../App.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Registration() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    const [registrationStatus, setRegistrationStatus] = useState("");

    let navigate = useNavigate();

    Axios.defaults.withCredentials = true;

    const [host, setHost] = useState('');
    const getHost = async () => {
        const res = await axios.get('http://localhost:4000/api/host');
        setHost(res.data.host);
        // this.setState({ host : res.data.host })
    }

    const register = () => {
        Axios.post("http://localhost:4000/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
            if (response.status == 200) {
                setRegistrationStatus(usernameReg + '님 가입을 축하드립니다!');
                setUsernameReg("");
                setPasswordReg("");
            }
        }).catch((error) => {
            console.error(error);
            setRegistrationStatus("사용이 불가능한 아이디입니다.");
        });
    };

    const login = () => {
        Axios.post("http://localhost:4000/login", {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
                if (loginStatus != null) {
                    return navigate("/main");
                }
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:4000/login").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username);
                return navigate("/main");
            }
        });

        getHost();

    }, []);

    return (
        <div className="App">
            <h3> Welcome to <u>{host}</u> Page! </h3>

            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
                <label>Password</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <button onClick={register}> Register</button>
            </div>

            <h1>{registrationStatus}</h1>

            <div className="login">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username..."
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password..."
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button onClick={login}> Login</button>
            </div>

            <h1>{loginStatus}</h1>
        </div>
    );
}
