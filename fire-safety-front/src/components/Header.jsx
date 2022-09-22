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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Fire Safety Project</Navbar.Brand>
          {/*<h1 className={'logo'}></h1>*/}

          {/*<nav className={'nav'}>
            <ul className={'nav-list'}>
              <li className={'nav-item'}>
                <NavLink to={`/dashboard`} className={'nav-link'}>
                  대시보드
                </NavLink>
              </li>
              <li className={'nav-item'}>
                <NavLink to={`/fault`} className={'nav-link'}>
                  장애관리
                </NavLink>
              </li>
              <li className={'nav-item'}>
                <NavLink to={`/performance`} className={'nav-link'}>
                  성능관리
                </NavLink>
              </li>
              <li className={'nav-item'}>
                <NavLink to={`/traffic`} className={'nav-link'}>
                  트래픽관리
                </NavLink>
              </li>
              <li className={'nav-item'}>
                <NavLink to={`/roaming`} className={'nav-link'}>
                  로밍관리
                </NavLink>
              </li>
              <li className={'nav-item'}>
                <NavLink to={`/user`} className={'nav-link'}>
                  유저관리
                </NavLink>
              </li>
              <li className={'nav-item'}>
                <NavLink to={`/system`} className={'nav-link'}>
                  시스템관리
                </NavLink>
              </li>
            </ul>
          </nav>*/}

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
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <ul className={'top-menu-list'}>
              <li className={'top-menu-item'}>
                <FontAwesomeIcon icon={faUser} className={'icon-user'} />
                <span>Admin</span>
              </li>
              <li className={'top-menu-item'}>
                <FontAwesomeIcon
                  icon={faRotateRight}
                  className={'icon-rotate'}
                  onClick={() => navigate(0)}
                />
              </li>
              <li className={'top-menu-item'}>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className={'icon-out'}
                />
              </li>
            </ul>
          </Nav>

          {/*<div className={'top-menu'}>
            <ul className={'top-menu-list'}>
              <li className={'top-menu-item'}>
                <FontAwesomeIcon icon={faUser} className={'icon-user'} />
                <span>Admin</span>
              </li>
              <li className={'top-menu-item'}>
                <FontAwesomeIcon
                  icon={faRotateRight}
                  className={'icon-rotate'}
                  onClick={() => navigate(0)}
                />
              </li>
              <li className={'top-menu-item'}>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className={'icon-out'}
                />
              </li>
            </ul>
          </div>*/}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
