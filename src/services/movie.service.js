import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    getAllMovies:
        (page) => axiosService.get(urls.discoverMovies, {params: {page}}),
    getByIdMovies: (id) => axiosService.get(`${urls.movie}/${id}`),
}
export {movieService}