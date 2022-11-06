import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import {genreActions} from "../../redux";
import css from './MoviesListCard.module.css'
import {StarRating} from "../StarRating/StarRating";


const MoviesListCard = ({movie}) => {
    const {
        poster_path, original_title, title,
        release_date, vote_average,  genre_ids
    } = movie;
    const [genres, setGenres] = useState([])
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(genreActions.getAllGenres()).then(({payload}) => setGenres(payload.genres))
    }, [])

    const badge = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name)
    badge.length = 2
    const navigate = useNavigate();

    return (
        <div className={css.wrapCard} onClick={() => navigate('movieInfo', {state: movie})}>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                 alt={`${original_title}`}/>
            <div className={css.badge}>
                {badge.map((item, index) =>
                    <p key={index} className={css.badge_item}>{item}</p>)}
            </div>
            <h4> {title} </h4>
            <p> Release Date:{release_date} </p>
            <p> Rating:{vote_average} </p>


            <StarRatings
                rating={vote_average}
                starDimension="15px"
                starSpacing="3px"
                numberOfStars={10}
                starRatedColor="gold"
            />

            {/*<StarRating/>*/}

        </div>
    );
};

export {MoviesListCard};