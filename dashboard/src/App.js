import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Header from './components/layout/Header';
import NotFound from './pages/NotFound';
import Sidebar from './components/layout/Sidebar';
import MainPage from './pages/MainPage';
import MyListPage from './pages/MyListPage';
import FavoritePage from './pages/FavoritePage';
import SettingPage from './pages/SettingPage';
import SideNavDiv from './components/layout/SideNav';
import SidebarV2 from './components/layout/SidebarV2';

import "./App.css";


/*
const Center = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`;
*/


function App() {
    return (
        <>
            <Header/>

            <SidebarV2>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/mylist"} element={<MyListPage/>}/>
                    <Route path={"/favorite"} element={<FavoritePage/>}/>
                    <Route path={"/setting"} element={<SettingPage/>}/>
                    <Route path='/dashboard/:dashboardId' element={<DashboardPage/>}/>
                </Routes>
            </SidebarV2>

            {/*<Center>*/}
            {/*<Sidebar />*/}
            {/*<SideNavDiv />*/}
            {/*            <Routes>

               <Route path='/' element={<MainPage />} />
               <Route path="/product/*" element={<Product />} />
               <Route path='/dashboard/:dashboardId' element={<DashboardPage />} />

               <Route path='/mylist' element={<MyListPage />} />
               <Route path='/favorite' element={<FavoritePage/>} />
               <Route path='/setting' element={<SettingPage />} />

                상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리
               <Route path='*' element={<NotFound />} />

            </Routes>*/}
            {/*</Center>*/}
        </>
    );
}

export default App;
