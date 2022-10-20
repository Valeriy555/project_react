import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'


const MoviesList = () => {
    const dispatch = useDispatch(); // добавили в стор
    const {movies, loading, error,  page} = useSelector(state => state.movieReducer); // достали из стор


    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))


    }, [dispatch, query])

    const prevPage = () => {

        const page = +query.get('page') - 1;
        setQuery({page: `${page}`})
    }
    const nextPage = () => {

        const page = +query.get('page') + 1;
        setQuery({page: `${page}`})
    }

    return (
        <div>
            {loading && <h1>Loading........................</h1>}
            {error && <h1>Error</h1>}
            <div className={css.wrap}>
                {movies?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                <button disabled={page === 1} onClick={prevPage}>prevPage</button>
                <button disabled={page>499} onClick={nextPage}>nextPage</button>
            </div>

        </div>
    );
};

export {MoviesList};