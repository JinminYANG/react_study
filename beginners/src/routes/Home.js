import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

import SearchIcon from "@mui/icons-material/Search";
import {Search,SearchIconWrapper,StyledInputBase} from "../components/Search"



function Home({search = ''}) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const FEATURED_API = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
    const SEARCH_API =  "https://yts.mx/api/v2/list_movies.json?sort_by=year&query_term=";

    const searchSpace = (event) => {
        let keyword = event.target.value;
        setInputValue(keyword);
        getMovies(SEARCH_API + keyword)
    };

    const getMovies = async (API) => {
        try{
            const response = await fetch(API);
            const json = await response.json();

            if(json.data.movies === undefined){
                return;
            } else {
                // eslint-disable-next-line array-callback-return
                json.data.movies.map((item) => {
                    if(item.genres === undefined){
                        item.genres = [];
                    }
                });
                setLoading(true);
                setMovies(json.data.movies);
                setLoading(false);
            }
            console.log(json);
        } catch (err){
            return err;
        }
    };

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.search_container}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                        onChange={(event)=>searchSpace(event)}
                        value={inputValue}
                        className={styles.input}
                    />
                </Search>
            </div>
            {
                loading
                    ?
                    <div className={styles.loader}>
                        <span>Loading...</span>
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
                            ))};
                        </div>
                    </div>
            }

        </div>
    );
}

export default Home;