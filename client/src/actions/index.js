export const setTrue=()=>{
    return {
        type:"SET_TRUE",
    }
}

export const setFalse=()=>{
    return {
        type:"SET_FALSE",
    }
}

export const setWpm=(val)=>{
    return{
        type:"SET_WPM",
        paylod:val
    }
}

export const setAccuracy=(val)=>{
    return {
        type:"SET_ACCURACY",
        Accuracy:val
    }
}

export const setUser =(val)=>{
        return {
        type:"SET_USER",
        userStatus:val
    }
}

export const setEmail= (val)=>{
    return{
        type:"SET_EMAIL",
        userEmail:val
    }
}

export const setRow=(val)=>{
    return{
        type:"SET_ROW",
        UserProgressROW:val
    }
}

export const setCol=(val)=>{
    return{
        type:"SET_COL",
        UserProgressCOL:val
    }
}

export const setName=(val)=>{
    return{
        type:"SET_NAME",
        userName:val
    }
}
