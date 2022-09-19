import React from 'react';
import {useStateContext} from "../contexts/ContextProvider";

const Header = () => {
    const {activeMenu, setActiveMenu, screenSize} = useStateContext();

    return (
        <div>
            Header
        </div>
    );
};

export default Header;
