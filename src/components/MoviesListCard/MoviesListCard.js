import {useDispatch} from "react-redux";
import css from './MoviesListCard.module.css'
import {movieActions} from "../../redux";

const MoviesListCard = ({movie}) => {
    const {id, poster_path, original_title,title} = movie;
    const dispatch = useDispatch();
    return (
        <div className={css.wrapCard}>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                 alt={`${original_title}`}/>
            <h3> {title} </h3>
            <button onClick={() => dispatch(movieActions.getById({id}))}>select</button>
        </div>
    );
};

export {MoviesListCard};