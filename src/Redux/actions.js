export const addFavorite = (char) =>{
    return ({type: 'ADD_FAVORITE', payload: char})
}


export const removeFavorite = (id) =>{
    return ({type: 'REMOVE_FAVORITE', payload: id})
} 