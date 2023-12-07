import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { genreReducer } from "./genreReducer";
import { orderReducer } from "./orderReducer";
import { productReducer } from "./productReducer";
import { reviewReducer } from "./reviewReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  allUsers: userReducer,
  orders: orderReducer,
  categories: categoryReducer,
  genre: genreReducer,
  reviews: reviewReducer,
});

export default rootReducer;
