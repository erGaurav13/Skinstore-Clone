

export  function Reducer(state,action){
 console.log(action.payload,"payload")
    if(action.type=="ADD"){
        return {...state,items:[...state.items,{...action.payload,id:Date.now()}]}
    }

    if(action.type=="REMOVE"){
        return  {...state,items:[...action.payload]}
    }

    if(state.action=="PLUS"){
        return  {...state,items:[...action.payload]}
    }
    if(state.action=="MINUS"){
        return  {...state,items:[...action.payload]}
    }

    if(action.type=="ADD_USER"){
        console.log(action.payload)
        return {...state,user:[...state.user,{...action.payload}]}
    }

    return state;
   
    
}