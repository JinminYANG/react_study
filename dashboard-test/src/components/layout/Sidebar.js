import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import { useState } from 'react';

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10%;
  background-color: dimgray;
`;

const Menu = styled.div`
  //margin-top: 30px;
  //width: 200px;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
   const [sidebar, setSidebar] = useState(false);
   const showSidebar = () => setSidebar(!sidebar);

   const sidebarMenus = [
      { name: 'Home', path: '/' },
      { name: 'My List', path: '/mylist' },
      { name: 'My favorite', path: '/favorite' },
      { name: 'Setting', path: '/setting' },
   ];
   /*
   * https://w3collective.com/react-sidebar-navigation-component/
   * sidebar flip control testing...
   */

   return (
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
         <button className="hamburger" type="button" onClick={showSidebar}>
            <div></div>
         </button>
         <ul onClick={showSidebar}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mylist">List</Link></li>
            <li><Link to="/favorite">favorite</Link></li>
            <li><Link to="/setting">Setting</Link></li>
         </ul>
      </nav>

      /*<Side>
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
      </Side>*/
   );
};

export default Sidebar;