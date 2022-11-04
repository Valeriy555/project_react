import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


let initialState = {
    results: [],
    loading: false,
    error: null,
    filterParam: '',
    page: null,


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
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        nextPage: (state, action) => {
            state.page += 1
        },
        prevPage: (state, action) => {
            state.page -= 1
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setFilterParam: (state, action) => {
            state.filterParam = action.payload
        }
    },
    extraReducers: builder =>
        builder
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

const {reducer: movieReducer, actions: {nextPage, prevPage, setPage, setFilterParam}} = movieSlice;

const movieActions = {
    getAll,
    // getById,
    nextPage,
    prevPage,
    setPage,
    setFilterParam
};

export {
    movieReducer,
    movieActions

}