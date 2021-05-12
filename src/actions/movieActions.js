export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
// export const TOOGLE_FAVORITE = "TOGGLE_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
export const addMovie = (movie)=>{
    return({type: ADD_MOVIE, payload:movie});
}
// export const toggleFavorite = (favorite) => {
//     return({type: TOGGLE_FAVORITE, payload:favorite})
// }
export const addFavorite = (favorite) => {
    return({type: ADD_FAVORITE, payload: favorite});
}
export const removeFavorite = (id) => {
    return({type: REMOVE_FAVORITE, payload:id})
} 