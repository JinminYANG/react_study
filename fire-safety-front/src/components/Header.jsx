import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faRotateRight,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/components/header.scss';

const Header = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeLink = '';
  const normalLink = '';

  return (
    <header className={'header'}>
      <h1 className={'logo'}>Fire Safety Project</h1>

      <nav className={'nav'}>
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
      </nav>

      <div className={'top-menu'}>
        <ul className={'top-menu-list'}>
          <li className={'top-menu-item'}>
            <FontAwesomeIcon icon={faUser} className={'icon-user'} />
            <span>Admin</span>
          </li>
          <li className={'top-menu-item'}>
            <FontAwesomeIcon
              icon={faRotateRight}
              className={'icon-rotate'}
              onClick={() => window.location.reload()}
            />
          </li>
          <li className={'top-menu-item'}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className={'icon-out'}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
