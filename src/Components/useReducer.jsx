import React, { useReducer } from "react";
//useReducer(reducer, initialState)
//newState = reducer(currentState, action)
//useReducer returns a pair of values [newState, dispatch]
// used for state management for state
const UseReducer = () => {
    const reducer = (currentState, action) =>{
        switch(action){
            case "Increment":
                return currentState +1
            case "Decrement":
                return currentState -1
            case "Reset":
                return initialState
            default:
                return currentState
        }
    }
	const initialState = 0;

	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
            <div className="">Count - {count}</div>
            <button onClick={()=> dispatch("Increment")}>Increment</button>
            <button onClick={()=> dispatch("Decrement")}>Decrement</button>
            <button onClick={()=> dispatch("Reset")}>Reset</button>
		</div>
	);
};

export default UseReducer;
