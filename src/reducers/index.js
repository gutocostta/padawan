import { combineReducers } from "redux";
import starWars from "./starWars";


const combinedReducers = combineReducers({
  starWars,
});

export default combinedReducers;
