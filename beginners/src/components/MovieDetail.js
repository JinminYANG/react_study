import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./MovieDetail.module.css";
import {FaStar} from "react-icons/fa";
import {useState} from "react";
import RatingStar from "./RatingStar";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function MovieDetail({coverImg, title, description, rating, genres, backgroundImg}) {
    return (
        <div className={styles.content}>
            <img src={coverImg} alt={title}/>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>Desc: {description}</p>
            <Stack direction="row" spacing={1} className={styles.genres}>
                {genres.map((g) => (
                    <Chip key={g} label={g} className={styles.genres_item}/>
                ))}
                {/*<Chip label="Chip Filled" />*/}
                {/*<Chip label="Chip Outlined" variant="outlined" />*/}
            </Stack>

{/*            <ul className={styles.genres}>
                {genres.map((g) => (
                    <li key={g} className={styles.genres_item}>{g}</li>
                ))}
            </ul>*/}

            <div className={styles.rating}>
                <span className={styles.ratingTitle}>Rating :</span>
                <RatingStar
                number={rating}
            />
            </div>

            <img className={styles.background} src={backgroundImg}/>
            <hr/>
            <Link to={"/"}>Home</Link>
        </div>
    );
}


MovieDetail.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default MovieDetail;