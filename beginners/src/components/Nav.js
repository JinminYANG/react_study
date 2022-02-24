import PropTypes from "prop-types";
import NavStyle from "./Nav.module.css";
import {Link} from "react-router-dom";
import {useState} from "react";

function Nav({genres}) {

    const getHighRating = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?hminimum_rating=9`)).json();
    };

    return (
        <div className={NavStyle.nav__contents}>
            <ul>
                <li><a href="#">High Rating</a></li>
                <li><a href="#">Romance</a></li>
                <li><a href="#">Thriller</a></li>
                <li><a href="#">Animation</a></li>
            </ul>
        </div>
    );
}

Nav.propTypes = {
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Nav;