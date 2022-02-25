import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


function Navbar() {
    return (
        <Nav>
            <NavLink to="/">
                <h1>Movies</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/update">
                    Update
                </NavLink>
                <NavLink to="/favorite">
                    Favorite
                </NavLink>
                <NavLink to="/animation">
                    Animation
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    );
}


export default Navbar;