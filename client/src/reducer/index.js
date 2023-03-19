import { truefalse,setAccuracy,setWpm,setUser,setEmail,setRow,setCol,setName} from "./typingtestReducer";


import {combineReducers} from "redux";

const rootReducer=combineReducers({
    truefalse,setWpm,setAccuracy,setUser,setEmail,setRow,setCol,setName

})

export default rootReducer