import {Dispatch} from "redux";
import axios from "axios";
import { Data } from "../data.model";

function getDataWithTypes(data : Data[]){
    return {
        "type" : "ADD_DATA",
        "payload" : data
    }
}

export const getDataFromAPI = ()=>{
    return async function(dispatch : Dispatch){
        try{
            const {data}  = await axios.get("http://localhost:3000/product");
        dispatch(getDataWithTypes(data));
        }catch(e){
            console.log(e);
        }
    }
}