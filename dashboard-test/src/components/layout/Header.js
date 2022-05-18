import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledHeader = styled.div`
  //max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;

  .logo {
    margin: 0 1rem;
    font-size: 2rem;
  }

  .header__menulist {
    list-style: none;
    display: flex;
  }

  .hedaer__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
  }

  .header__right div {
    margin: 0 1rem;
  }

  li {
    padding: 0 1rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    .header__right {
      display: ${(props) => (props.userToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }
  }

`;

const Header = () => {
   const [isToggled, setIsToggled] = useState(false);
   const [userToggled, setUserToggled] = useState(false);

   return (
      <StyledHeader isToggled={isToggled} userToggled={userToggled}>

         {/* 햄버거 버튼(bar) */}
         <div className={'toggle'} onClick={() => setIsToggled(!isToggled)}>
            <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
         </div>

         {/* Apple 로고 */}
         <div className='logo'>
            {/*<FontAwesomeIcon icon={faApple}/>*/}
         </div>

         {/* User 버튼 */}
         <div className={'user'} onClick={() => setUserToggled(!userToggled)}>
            <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
         </div>

         {/* 메뉴 리스트 */}
         <ul className={'header__menulist'}>
            <li>dashboard1</li>
            <li>dashboard2</li>
            <li>dashboard3</li>
            <li>dashboard4</li>
            <li>dashboard5</li>
         </ul>

         {/* User 메뉴 리스트 */}
         <ul className='header__right'>
            <li>Login</li>
            <li>Register</li>
         </ul>
      </StyledHeader>
   );
};

export default Header;