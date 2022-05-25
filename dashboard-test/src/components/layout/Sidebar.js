import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SidebarItem from './SidebarItem';

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
   const sidebarMenus = [
      { name: 'Home', path: '/' },
      { name: 'My List', path: '/mylist' },
      { name: 'My favorite', path: '/favorite' },
      { name: 'Setting', path: '/setting' },
   ];


   return (
      <Side>
         <Menu>
            {sidebarMenus.map((menu, index) => {
               return (
                  <NavLink
                     to={menu.path}
                     // style={{ color: 'gray', textDecoration: 'none' }}
                     style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
                     key={index}
                     // activeStyle={{ color: 'black' }}
                  >
                     <SidebarItem
                        menu={menu}
                     />
                  </NavLink>
               );
            })}
         </Menu>
      </Side>
   );
};

export default Sidebar;