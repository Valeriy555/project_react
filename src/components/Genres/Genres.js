import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions, movieActions} from "../../redux";

import {useForm} from "react-hook-form";

const Genres = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch(); // положить в стор
    const {genres, loading, error} = useSelector(state => state.genreReducer); // достать из стора

    useEffect(() => {
        dispatch(genreActions.getAllGenres())

    }, [])

    const submit = async (data) => {
        await dispatch(movieActions.setFilterParam(data.filter))
        reset()
    };

    return (
        <div>
            {loading && <h1>Loading........................</h1>}
            {error && <h1>Error</h1>}
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <select {...register('genre')}>
                        {genres.genres?.map(genre => (
                            <option key={genre.id} value={genre.id}>{genre.name} - {genre.id} </option>
                        ))}

                    </select>
                </form>
            </div>

        </div>
    );
};

export {Genres};