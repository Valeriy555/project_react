import {useDispatch} from "react-redux";
import css from './MoviesListCard.module.css'
import {movieActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {id, poster_path, original_title,title} = movie;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toMovieInfo = () => {
        dispatch(movieActions.getById({id}))
        navigate('/moviesInfo')
    }
    return (
        <div className={css.wrapCard} onClick={toMovieInfo}>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                 alt={`${original_title}`}/>
            <h5> {title} </h5>
            {/*<button onClick={() => dispatch(movieActions.getById({id}))}>select</button>*/}
        </div>
    );
};

export {MoviesListCard};