const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };

    case "ADD_FAVORITE":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
  }
};

export default rootReducer;
