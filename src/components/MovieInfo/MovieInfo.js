import {useEffect} from "react";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../redux";
import css from './MovieInfo.module.css'
import {useNavigate} from "react-router-dom";
import {StarRating} from "../StarRating/StarRating";

// import StarRatings from "react-star-ratings/build/star-ratings";

const MovieInfo = () => {
    const location = useLocation();
    const dispatch = useDispatch;
    const {state} = location;

    const {genres} = useSelector(state => state.genreReducer);
    const {page} = useSelector(state => state.movieReducer);

    const {
        genre_ids, overview, original_language, original_title,
        popularity,  vote_count, poster_path
    } = state

    // useEffect(() => {
    dispatch(genreActions.getAllGenres())
    // }, [])

    const genresMovie = genres?.genres?.filter(genre => genre_ids.includes(genre.id))

    const navigate = useNavigate()

    return (
        <div>
            <div className={css.wrapMovie}>

                <div className={css.poster}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={``}/>
                </div>

                <div className={css.title}>
                    <h2> {original_title}</h2><br/>
                    <div className={css.genres}>
                        {genresMovie?.map(genre => (<i key={genre.id}>{genre.name}</i>))}
                    </div>
                    <div className={css.rating}>

                        <StarRating/> <br/>
                        <b>Popularity:</b> {popularity} <br/>
                        <b>Vote count:</b> {vote_count} <br/>
                        <b>Vote count:</b> {vote_count} <br/>
                    </div>
                    <hr/>
                    <b>Overview:</b> {overview} <br/>
                    <b>Original language:</b> {original_language} <br/>


                </div>

            </div>
            <button className={css.btnMovie}
                    onClick={() => navigate(`/movies/?page=${page}`)}>
                Click to back to movie list
            </button>
        </div>
    );
};

export {MovieInfo};