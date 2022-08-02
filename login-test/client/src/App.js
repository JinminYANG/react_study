import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Registration/>}/>
                <Route path="/main" exact element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
