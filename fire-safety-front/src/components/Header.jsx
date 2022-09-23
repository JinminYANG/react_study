import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faRotateRight,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
// import '../styles/components/header.scss';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  // const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  // const activeLink = '';
  // const normalLink = '';

  const navigate = useNavigate();

  return (
    <header className={'header'}>
      <Navbar bg="dark" variant="dark" className={'p-2'}>
        <Navbar.Brand href="#">Fire Safety Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={`/dashboard`} className={'nav-link'}>
              대시보드
            </NavLink>
            <NavLink to={`/fault`} className={'nav-link'}>
              장애관리
            </NavLink>
            <NavLink to={`/traffic`} className={'nav-link'}>
              트래픽관리
            </NavLink>
            <NavLink to={`/roaming`} className={'nav-link'}>
              로밍관리
            </NavLink>
            <NavLink to={`/user`} className={'nav-link'}>
              유저관리
            </NavLink>
            <NavLink to={`/system`} className={'nav-link'}>
              시스템관리
            </NavLink>
          </Nav>

          <Nav className={'top-menu'}>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faUser} className={'icon-user me-2'} />
              <span>Admin</span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <FontAwesomeIcon
                icon={faRotateRight}
                className={'icon-rotate'}
                onClick={() => navigate(0)}
              />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className={'icon-out'}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
