

export  function Reducer(state,action){
 
    if(action.type=="ADD"){
        return {...state,items:[...state.items,action.payload]}
    }

    if(action.type=="PLUS"){
        return 
    }

    return state;
   
    
}