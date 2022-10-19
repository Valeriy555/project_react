import axios from "axios";
import {baseURL} from "../configs";

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWQ5MmI2NDhiZmFiMjc3ZDdmNmFkNGMzZjlmMDYxMCIsInN1YiI6IjYxMzBhN2ZiNmEzNDQ4MDA5MGY2Y2FlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7PTL0s6BmgVbKC7FcVx-u1PGwIkKnWTSsSuw2UXvgwU'
    }
})


export {axiosService};
