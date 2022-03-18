import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Container from "@mui/material/Container";
import {CircularProgress, Grid} from "@mui/material";
import Movie from "../components/Movie";
import {useEffect, useState} from "react";
import {ContainerClass, leftButton, nextArrow, SlideTitle} from "./SlideStyle";
import styled from "styled-components";

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
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, background: "red"}}
                onClick={onClick}
            />
        );
    }

    // sass를 이용한 가상클래스 style
    const Button = styled.button`
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.1);
        &:before{
            font-size: 40px !important;
            color: rgba(0,0,0,1) !important;
        }
        &:hover{
            background-color: rgba(0, 0, 0, 0.4);
            transition: all 0.3s;
        }
    `;

    const LeftArrow = ({className, style, onClick}) => (
        <Button
            style={{...style, left: "0", width: "50px", height: "100%"}}
            onClick={onClick}
            className={className}
        >
        </Button>
    );
    const RightArrow = ({className, style, onClick}) => (
        <Button
            style={{...style, right:"0", width: "50px", height: "100%"}}
            onClick={onClick}
            className={className}
        >
        </Button>
    );

    const popularSlideSettings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "80px",
        slidesToShow: 3,
        speed: 700,
        // autoplay: true,
        autoplaySpeed: 500,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        // responsive error -> style error로 추정됨
    };

    // single slider
    const downloadSlideSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
    };

    // fade slider
    const likeSlideSettings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,    // 이 속성을 이용해서 div에 따른 크기를 유동적으로 설정할 수 있음
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
    };

    return (
        <Container maxWidth="false" disableGutters={true}>
            {
                loading
                    ?
                    <CircularProgress/>
                    :
                    <div>
                        <div>
                            <SlideTitle>인기 순위</SlideTitle>
                            <Slider {...popularSlideSettings}>
                                {movies.map((movie) => (
                                    <div key={movie.id}>
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            coverImg={movie.medium_cover_image}
                                            title={movie.title.length > 16 ? `${movie.title.slice(0, 16)}...` : movie.title}
                                            summary={movie.summary}
                                            genres={movie.genres.length > 3 ? movie.genres.slice(0, 3) : movie.genres}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        <div>
                            <SlideTitle>다운로드 순위</SlideTitle>
                            <Slider {...downloadSlideSettings}>
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
                            <Slider {...likeSlideSettings}>
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