import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


let initialState = {
    movies: [],
    currentMovie: null,
    loading: false,
    error: null,
    movieFromApi: null,
    pages: null,
    results: []

}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.movies = action.payload
            //     state.loading = false
            // })
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.page = page
                state.movies = results

                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => { // отклоненный
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => { // в ожидании

                state.loading = true
            })


})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    getAll
};

export {
    movieReducer,
    movieActions

}