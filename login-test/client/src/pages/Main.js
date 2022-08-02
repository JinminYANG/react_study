import { useEffect, useState } from "react";
import Axios from "axios";

import NormalUser from "../components/NormalUser";
import Mod from "../components/Mod";
import Admin from "../components/Admin";

export default function Main() {
    const [role, setRole] = useState("");
    const [username, setUsername] = useState("");

    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            console.log(response);
            if (response.data.loggedIn == true) {
                // setRole(response.data.user[0].role);
                setUsername(response.data.user[0].username);
            }
        });
    }, []);

    return (
        <div>
            {/*{role == "visitor" && <NormalUser />}*/}
            {/*{role == "mod" && <Mod />}*/}
            {/*{role == "admin" && <Admin />}*/}
            {username == 'aixcon' && <Admin username={username}/>}
        </div>
    );
}
