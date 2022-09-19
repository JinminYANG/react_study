import {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";


import './App.css';
import {useStateContext} from "./contexts/ContextProvider";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Fault from "./pages/Fault";
import Performance from "./pages/Performance";
import Traffic from "./pages/Traffic";
import Roaming from "./pages/Roaming";
import User from "./pages/User";
import System from "./pages/System";

const App = () => {
    const {activeMenu} = useStateContext();

    return (
        <>
            <BrowserRouter>
                <div className={"page-wrapper"}>
                    {activeMenu ? (
                        // <div className={"w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"}>
                        <div className={""}>
                            <Header/>
                        </div>
                    ) : (
                        // <div className={"w-0 dark:bg-secondary-dark-bg"}>
                        <div className={""}>
                            <Header/>
                        </div>
                    )}
                    <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <div>
                            <Routes>
                                <Route path={"/"} element={<Dashboard/>}/>
                                <Route path={"/dashboard"} element={<Dashboard/>}/>
                                <Route path={"/fault"} element={<Fault/>}/>
                                <Route path={"/performance"} element={<Performance/>}/>
                                <Route path={"/traffic"} element={<Traffic/>}/>
                                <Route path={"/roaming"} element={<Roaming/>}/>
                                <Route path={"/user"} element={<User/>}/>
                                <Route path={"/system"} element={<System/>}/>
                            </Routes>
                        </div>

                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
