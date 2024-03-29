import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/common/App.css';
import './styles/common/reset.scss';
import { useStateContext } from './contexts/ContextProvider';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Fault from './pages/Fault';
import Performance from './pages/Performance';
import Traffic from './pages/Traffic';
import Roaming from './pages/Roaming';
import User from './pages/User';
import System from './pages/System';
import Container from 'react-bootstrap/Container';
// import HeaderV2 from './components/HeaderV2';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <>
      <BrowserRouter>
        <Container fluid className={'p-0 wrapper'}>
          <Header />
          <Container fluid className={'main'}>
            <Routes>
              <Route path={'/'} element={<Dashboard />} />
              <Route path={'/dashboard'} element={<Dashboard />} />
              <Route path={'/fault'} element={<Fault />} />
              <Route path={'/performance'} element={<Performance />} />
              <Route path={'/traffic'} element={<Traffic />} />
              <Route path={'/roaming'} element={<Roaming />} />
              <Route path={'/user'} element={<User />} />
              <Route path={'/system'} element={<System />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
