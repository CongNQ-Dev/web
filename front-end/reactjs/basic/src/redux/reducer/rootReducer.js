import { combineReducers } from "redux";
import cartReducer from "../../buyPhone/redux/cartReducer";
import BauCuaTomCaReducer from "./reducers/reducers";

export const rootReducer = combineReducers({
  BauCuaTomCaReducer,
  cartReducer,
});
