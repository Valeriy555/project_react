import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genreActions, movieActions} from "../../redux";

import {useForm} from "react-hook-form";
import css from "./Genres.module.css";

const Genres = () => {
    const [genres, setGenres] = useState([])
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch(); // положить в стор
    // const {genres, loading, error} = useSelector(state => state.genreReducer); // достать из стора

    useEffect(() => {
        dispatch(genreActions.getAllGenres()).then(({payload}) => setGenres(payload.genres))

    }, [])

    const submit =  (data) => {
        // console.log(dispatch(genreActions.getGenre(genre)));
        dispatch(movieActions.setFilterParam(data.filter))
    };

    return (
        <div>

                <form onChange={handleSubmit(submit)}>

                    <select {...register('genre')} className={css.select}>
                        {genres.map(genre => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}

                            </option>
                        ))}

                    </select>
                </form>


        </div>
    );
};

export {Genres};