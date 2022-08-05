// import {INITIAL_VALUE} from "./types/actions";
import {Data} from "./data.model";
import {combineReducers} from "redux";
import {Action} from "./types/actions";

const rootReducer = (state : Data[] = [], action : Action)=>{
    switch(action.type){
        case "ADD_DATA":
            return [...state, ...action.payload];
        default:
            return state;
    }
}

const reducers = combineReducers({apiData : rootReducer});

export type State = ReturnType<typeof reducers>

export default reducers;