import React from 'react';
import {useStateContext} from "../contexts/ContextProvider";
import {NavLink} from "react-router-dom";

const Header = () => {
    const {activeMenu, setActiveMenu, screenSize} = useStateContext();

    const activeLink = '';
    const normalLink = '';

    return (
        <header className={"header"}>
            <h1 className={"logo"}>
                Fire Safety Project
            </h1>

            <nav className={"nav"}>
                <ul className={"nav-list"}>
                    <li className={"nav-item"}>
                        <NavLink to={`/dashboard`}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink to={`/fault`}>
                            Fault
                        </NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink to={`/performance`}>
                            Performance
                        </NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink to={`/traffic`}>
                            Traffic
                        </NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink to={`/roaming`}>
                            Roaming
                        </NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink to={`/user`}>
                            User
                        </NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink to={`/system`}>
                            System
                        </NavLink>
                    </li>
                </ul>

            </nav>

        </header>
    );
};

export default Header;
