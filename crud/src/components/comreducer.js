import { combineReducers } from "redux";
import addReducer from "./addReducer";


const reducers = combineReducers({
    data:addReducer
})

export default reducers