import { useReducer,createContext,useEffect } from "react";

//inital state
const intialState = {
     score: 0,
 };

 //Create context 
 const Context= createContext();

 //root reducer 

 const rootReducer= (state, action)=>{
     switch(action.type){
         case "increase":
             return {...state, score: state.score + 1 }
        case "nochange":
             return {...state, score: state.score}
        default:
                return state;
     }
 }

//context provider 

const Provider=({children})=>{
    const [state,dispatch]=useReducer(rootReducer,intialState);

  

    return(
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}

export { Context,Provider};


