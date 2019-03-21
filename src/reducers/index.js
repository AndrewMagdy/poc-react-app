import { combineReducers } from "redux";
import basketReducer from "./basket/basketReducer";
import itemsReducer from "./items/itemsReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  basket: basketReducer
});

export default rootReducer;
