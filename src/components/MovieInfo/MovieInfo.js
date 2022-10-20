import {useSelector} from "react-redux";

const MovieInfo = () => {
    const {movieFromApi} = useSelector(state=>state.movieReducer);
    return (
        <div>
            {movieFromApi && movieFromApi.id} <br/>
            {movieFromApi && movieFromApi.original_title} <br/>
            {movieFromApi && movieFromApi.overview} <br/>
            {movieFromApi && movieFromApi.imdb_id} <br/>
            {movieFromApi && movieFromApi.original_language} <br/>


        </div>
    );
};

export {MovieInfo};