

export const Add=(payload)=>{

    return {
        type:"ADD",
        payload: payload
    }
}

export const REMOVE=(payload)=>{

    return {
        type:"REMOVE",
        payload: payload
    }
}
export const PLUS=(payload)=>{
    return {
        type:"PLUS",
        payload: payload 
    }
}
export const MINUS=(payload)=>{
    return {
        type:"MINUS",
        payload: payload 
    }
}

export const ADD_USER=(payload)=>{
    console.log(payload)
    return {
        type:"ADD_USER",
        payload: payload 
    }
}