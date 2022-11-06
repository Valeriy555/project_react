import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genreActions, movieActions} from "../../redux";

import {useForm} from "react-hook-form";
import css from "../Header/Header.module.css";

const Genres = () => {
    const [genres, setGenres] = useState([])
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch(); // положить в стор
    // const {genres, loading, error} = useSelector(state => state.genreReducer); // достать из стора

    useEffect(() => {
        dispatch(genreActions.getAllGenres()).then(({payload}) => setGenres(payload.genres))

    }, [])

    const submit = async (data) => {
        await dispatch(movieActions.setFilterParam(data.filter))
        reset()
    };

    return (
        <div>
            {/*{loading && <h1>Loading........................</h1>}*/}
            {/*{error && <h1>Error</h1>}*/}
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <select {...register('genre')} className={css.select}>
                        {genres.map(genre => (
                            <option key={genre.id} value={genre.id}
                                 onClick={() => {
                                    dispatch(genreActions.getGenre(genre))
                                }}> {genre.name}
                            </option>
                        ))}

                    </select>
                </form>


            </div>

        </div>
    );
};

export {Genres};