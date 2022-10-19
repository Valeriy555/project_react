import {useDispatch} from "react-redux";
import css from './MoviesListCard.module.css'

const MoviesListCard = ({movie}) => {

    // const dispatch = useDispatch();
    return (
        <div className={css.wrapCard}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                 alt={`${movie.original_title}`}/>
            <h3> {movie.title} </h3>

        </div>
    );
};

export {MoviesListCard};