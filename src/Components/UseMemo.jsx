import React, { useState, useMemo } from "react";

const UseMemo = () => {
	const [counterOne, setCounterOne] = useState(0);
	const [counterTwo, setCounterTwo] = useState(0);
    const [b, setB] = useState(true);
	const updateCounterOne = (a) => {
        if(a){
            setCounterOne(counterOne + 1);

        }else{
		setCounterOne(counterOne - 1);

        }
        setB(!b)
	};

	// const isCounterOneEven = () => {
	//     let i=0;
	//     while(i <2000000000) i++;
	//     return counterOne%2 ===0
	// }
	//It caches the value of the function, it only recalculates it when the state in the second parameter changes
	const isCounterOneEven = useMemo(() => {
        console.log("Evaluated")
		let i = 0;
		while (i < 2000000000) i++;
		return counterOne % 2 === 0;
	}, [counterOne]);

	const updateCounterTwo = () => {
		setCounterTwo(counterTwo + 1);
	};

	return (
		<div>
			<button onClick={()=>updateCounterOne(b)}>
				{counterOne}
				{isCounterOneEven ? "Even" : "Odd"}
			</button>
			<button onClick={updateCounterTwo}>{counterTwo}</button>
		</div>
	);
};

export default UseMemo;

//Usememo caches the result
//used to cache the result of a function
//The React useMemo Hook returns a memoized value.
//The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.


