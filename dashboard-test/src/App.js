import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Header from './components/layout/Header';
import NotFound from './pages/NotFound';

function App() {
   return (
      <>
         <Header/>
         <Routes>
            <Route path="/dashboard/*"  element={<DashboardPage />} />
            <Route path="/*" element={<NotFound />} />
         </Routes>
      </>
   );
}

export default App;
