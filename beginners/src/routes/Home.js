import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

import SearchIcon from "@mui/icons-material/Search";
import {Search, SearchIconWrapper, StyledInputBase} from "../components/Search"
import {CircularProgress} from "@mui/material";


function Home({search = ''}) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const FEATURED_API = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
    const SEARCH_API = "https://yts.mx/api/v2/list_movies.json?sort_by=year&query_term=";

    const searchSpace = (event) => {
        let keyword = event.target.value;
        setInputValue(keyword);
        getMovies(SEARCH_API + keyword);
    };

    // timeout test code
    /*    const wait = (timeToDelay) => new Promise((resolve => {
            setTimeout(resolve, timeToDelay);
        }));*/

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

    return (
        <div className={styles.container}>
            <div className={styles.search_container}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{"aria-label": "search"}}
                        onChange={(event) => searchSpace(event)}
                        value={inputValue}
                        className={styles.input}
                    />
                </Search>
            </div>
            {
                loading
                    ?
                    <div className={styles.loader}>
                        <span>Loading... </span>
                        <CircularProgress />
                    </div>
                    :
                    <div>
                        <div className={styles.movies}>
                            {movies.map((movie) => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    coverImg={movie.medium_cover_image}
                                    title={movie.title}
                                    summary={movie.summary}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>
                    </div>
            }

        </div>
    );
}

export default Home;