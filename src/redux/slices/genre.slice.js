import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


let initialState = {
    genres: [],
    genre: null,
    loading: false,
    error: null,

}


const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllGenre()
            return data
        } catch (e) {
            return rejectWithValue(e.response?.data)
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        getGenre: (state, action) => {
            state.genre = action.payload
        }},
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = false
            })
            .addCase(getAllGenres.rejected, (state, action) => { // отклоненный
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAllGenres.pending, (state, action) => { // в ожидании
                state.loading = true
            })
})

const {reducer: genreReducer, actions: {getGenre}} = genreSlice;

const genreActions = {
    getAllGenres,
    getGenre

};

export {
    genreReducer,
    genreActions,
    genreSlice
}