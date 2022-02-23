import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MovieDetail({coverImg, title, description, rating, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h1>{title}</h1>
            <p>desc: {description}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}

            </ul>
            <p>rating: {rating}</p>
            <strong><Link to={"/"}>Home</Link></strong>
        </div>
    );
}


MovieDetail.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};


export default MovieDetail;