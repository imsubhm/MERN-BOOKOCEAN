import actionTypes from "../constants";

const initialState = {
  genres: [],
  genre: [],
  createGenre: [],
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case actionTypes.FETCH_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case actionTypes.CREATE_GENRE:
      return {
        ...state,
        createGenre: action.payload,
      };

    default:
      return state;
  }
};

export { genreReducer };
