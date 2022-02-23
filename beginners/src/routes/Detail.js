import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MovieDetail from "../components/MovieDetail";
import Movie from "../components/Movie";

function Detail() {
    const {id} = useParams();  // url에 전달된 parameter 값을 받아올 수 있게 해주는 함수

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetail(json.data.movie);
        setLoading(false);
    };


    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {
                loading
                    ?
                    <h1>Loading...</h1>
                    :
                    <div>
                        <MovieDetail
                            coverImg={detail.medium_cover_image}
                            title={detail.title}
                            description={detail.description_full}
                            rating={detail.rating}
                            genres={detail.genres}
                        />
                    </div>
            }


        </div>
    );
}


export default Detail;