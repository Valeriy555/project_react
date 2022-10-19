import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    getAllMovies:
        (page ) =>  axiosService.get(urls.discoverMovies,{params:{page}}),
}
export {movieService}