const userReducer = (state = [], action) => {
    
    switch(action.type){
        case "SAVE_USER":
            return action.payload;
        default : return [];
    }
}

export default userReducer;