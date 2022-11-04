import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux";
import css from './pagination.module.css'

const Pagination = () => {

    const {page} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const prevPage = () => {

            dispatch(movieActions.prevPage())
            navigate(`?page=${page - 1}`)

    }
    const nextPage = () => {

        dispatch(movieActions.nextPage())
        navigate(`?page=${page + 1}`)
    }


    return (
        <div className={css.pagination}>
            <button className={css.btn} onClick={prevPage} disabled={page === 1}>Prev
            </button>
            <button className={css.btn}  onClick={nextPage} disabled={page>499} >
                Next
            </button>
        </div>
    );
};

export default Pagination;