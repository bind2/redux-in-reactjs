const initialState = 0
const changeNumber = (state = initialState, action)=>{
    switch(action.type){
        case 'inc': return state + action.payload;
        case 'dec': if(state > 0) return state - action.payload;
        default: return state;
    }
}

export default changeNumber;