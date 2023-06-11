import { combineReducers } from "redux";
import ProductSlice from "./ProductSlice";

const rootReducer = combineReducers({
  Products: ProductSlice
});

export default rootReducer;
