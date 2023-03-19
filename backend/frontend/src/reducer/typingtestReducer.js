const initialdata=false;


export const truefalse=(state=initialdata,action)=>{
    switch(action.type){
        case "SET_TRUE" :return state=true;
        case "SET_FALSE":return state=false;
        default :return state;
    }
}

var wpmdata=0;
export const setWpm=(state=wpmdata,action)=>{
    switch(action.type){
        case"SET_WPM":return wpmdata=action.paylod;
        default : return wpmdata;
    }
}

var Accuracy=0;
export const setAccuracy=(state=Accuracy,action)=>{
    switch(action.type){
        case"SET_ACCURACY": return Accuracy=action.Accuracy;
        default: return Accuracy;
    }
}

var userStatus=null;
export const setUser = (state=userStatus,action)=>{
    switch(action.type){
        case "SET_USER":
             return userStatus = action.userStatus;
        default: return userStatus;
    }
}

var userEmail="";
export const setEmail=(state=userEmail,action)=>{
    switch(action.type){
        case "SET_EMAIL":
            return userEmail=action.userEmail
            default:return userEmail
    }
}


export const setRow = (state=0,action)=>{
    switch(action.type){
        case "SET_ROW":
         return action.UserProgressROW
         default:return state;
    }
}


export const setCol = (state=0,action)=>{
    switch(action.type){
        case "SET_COL":
         return action.UserProgressCOL
         default:return state;
    }
}


export const setName=(state="",action)=>{
    switch(action.type){
        case "SET_NAME":
            return action.userName
            default :return state;
    }
}



