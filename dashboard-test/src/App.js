import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Header from './components/layout/Header';
import NotFound from './pages/NotFound';
import Sidebar from './components/layout/Sidebar';
import MainPage from './pages/MainPage';

function App() {
   return (
      <>
         <Header/>
         <Sidebar/>
         <Routes>

            <Route path="/" element={<MainPage />} />
            {/*<Route path="/product/*" element={<Product />} />*/}
            <Route path="/dashboard/*"  element={<DashboardPage />} />

            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<NotFound />} />



         </Routes>
      </>
   );
}

export default App;
