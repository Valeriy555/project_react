import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions, movieActions} from "../../redux";

const GenresBadge = () => {

    // const {movies} = useSelector(state => state.movieReducer);
//     const {genres} = useSelector(state => state.genreReducer); // достать из стора
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         dispatch(genreActions.getAllGenres())
//         // dispatch(movieActions.getAll())
//     }, [])
//
//
    return (

        <div>
            //
            //
            //
            {/*//             <div>*/}
            // {/*    {movies?.map(movie => <div key={movie.id}>{movie.genre_ids}</div>)}*/}
            //
            {/*//                 {genres.genres?.map(genre =>*/}
            {/*//                     <div key={genre.id}>{genre.name} - {genre.id} </div>)}*/}
            {/*//             </div>*/}
        </div>
//
    );
};

export {GenresBadge};