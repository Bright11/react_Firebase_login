const AuthReducer = (state, action) =>{
    //for login
    switch (action.type){
        case "LOGIN": {
            return{
                currentUser:action.payload,
            };
        }
        //the end
        case "LOGOUT":{
            return{
                currentUser:null,
            };
        }
        default:
            return state;
    }
};

export default AuthReducer;