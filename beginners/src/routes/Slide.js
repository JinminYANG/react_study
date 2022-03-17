import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Container from "@mui/material/Container";
import {CircularProgress, Grid} from "@mui/material";
import Movie from "../components/Movie";
import {useEffect, useState} from "react";
import {SlideTitle} from "./SlideStyle";

export default function Slide() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const FEATURED_API = "https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=10";

    const getMovies = async (API, time = 300) => {
        setTimeout(async () => {
            try {
                // setLoading(true);
                const response = await fetch(API);
                const json = await response.json();

                if (json.data.movies === undefined) {
                    return;
                } else {
                    setLoading(true);
                    // eslint-disable-next-line array-callback-return
                    json.data.movies.map((item) => {
                        if (item.genres === undefined) {
                            item.genres = [];
                        }
                    });
                    setMovies(json.data.movies);
                    setLoading(false);
                }
                console.log(json);
            } catch (err) {
                return console.error(err);
            }
        }, time);
    };


    useEffect(() => {
        getMovies(FEATURED_API, 1000);
    }, []);

    // Custom Arrow... 
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    function nextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const slideSettings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "80px",
        slidesToShow: 3,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Container maxWidth="xl">
            {
                loading
                    ?
                    <CircularProgress/>
                    :
                    <div>
                        <div>
                            <SlideTitle>인기 순위</SlideTitle>
                            <Slider {...slideSettings}>
                                {movies.map((movie) => (
                                    <div key={movie.id}>
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            coverImg={movie.medium_cover_image}
                                            title={movie.title.length > 16 ? `${movie.title.slice(0, 16)}...` : movie.title}
                                            summary={movie.summary}
                                            genres={movie.genres.length > 3 ? movie.genres.slice(0,3): movie.genres}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        
                        <div>
                            <SlideTitle>다운로드 순위</SlideTitle>
                            <Slider {...slideSettings}>
                                {movies.map((movie) => (
                                    <div key={movie.id}>
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            coverImg={movie.medium_cover_image}
                                            title={movie.title.length > 20 ? `${movie.title.slice(0, 20)}...` : movie.title}
                                            summary={movie.summary}
                                            genres={movie.genres}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div>
                            <SlideTitle>찜 순위</SlideTitle>
                            <Slider {...slideSettings}>
                                {movies.map((movie) => (
                                    <div key={movie.id}>
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            coverImg={movie.medium_cover_image}
                                            title={movie.title.length > 20 ? `${movie.title.slice(0, 20)}...` : movie.title}
                                            summary={movie.summary}
                                            genres={movie.genres}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                    </div>
            }

        </Container>
    );

}