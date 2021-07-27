import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies:[],
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        setMovies: (state, action) =>{
            state.movies = action.payload;//
        } //chuyen movie moi tu database
    }
})

export const { setMovies } = movieSlice.actions; //export movie state
    
export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer; //khai bao cho store.js