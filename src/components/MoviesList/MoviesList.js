import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'
import Pagination from "../Pagination/Pagination";

const MoviesList = () => {
    const dispatch = useDispatch(); // добавили в стор
    const {page, loading, error, filterParam} = useSelector(state => state.movieReducer); // достали из стор

    const [query] = useSearchParams({page: '1'});

    const [movies, setMovies] = useState([])
    const {genre} = useSelector(state => state.genreReducer)

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
            .then(({payload}) => setMovies(payload.results))
    }, [page, query])

    useEffect(() => {

        if (genre) {
            setMovies(movies.filter(movie => movie.genre_ids.includes(genre.id)))
        } else {
            dispatch(movieActions.getAll({page: query.get('page')}))
                .then(({payload}) => setMovies(payload.results))
        }

    }, [genre])

    useEffect(() => {
        setMovies(movies.filter(movie => movie.title.includes(filterParam)))
        if (filterParam === '') {
            dispatch(movieActions.getAll({page: query.get('page')}))
                .then(({payload}) => setMovies(payload.results))
        }
    }, [filterParam])

    return (
        <div>
            {loading && <h1>Loading........................</h1>}
            {error && <h1>Error</h1>}

            <div className={css.wrap}>

                {movies?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                {filterParam !== '' &&
                    <div >
                        <button
                            onClick={() => dispatch(movieActions.setFilterParam(''))}>
                            Go to movies
                        </button>
                    </div>
                }
                <Pagination/>
            </div>

        </div>
    );
};

export {MoviesList};