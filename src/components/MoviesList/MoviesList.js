import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'
import Pagination from "../Pagination/Pagination";

const MoviesList = () => {
    const dispatch = useDispatch(); // добавили в стор
    const {movies, loading, error} = useSelector(state => state.movieReducer); // достали из стор

    const [query] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query])

    return (
        <div>
            {loading && <h1>Loading........................</h1>}
            {error && <h1>Error</h1>}

            <div className={css.wrap}>

                {movies?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

                <Pagination/>
            </div>

        </div>
    );
};

export {MoviesList};