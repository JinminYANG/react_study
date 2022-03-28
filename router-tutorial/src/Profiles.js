import {Link, NavLink, Route} from "react-router-dom";
import Profile from "./Profile";
// import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    const activeStyle = {
        background:'black',
        color: 'white'
    };

    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    {/*<Link to="/profiles/velopert">Velopert</Link>*/}
                    <NavLink activeStyle={activeStyle} to="/profiles/velopert">Velopert</NavLink>
                </li>
                <li>
                    {/*<Link to="/profiles/gildong">Gildong</Link>*/}
                    <NavLink activeStyle={activeStyle} to="/profiles/gildong">Gildong</NavLink>
                </li>
            </ul>

            <Route path="/profiles/:username" component={Profile}/>

            {/*<WithRouterSample />*/}
        </div>
    );
};

export default Profiles;

