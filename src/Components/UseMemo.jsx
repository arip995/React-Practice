import React, { useState, useMemo } from "react";

const UseMemo = () => {
	const [counterOne, setCounterOne] = useState(0);
	const [counterTwo, setCounterTwo] = useState(0);

	const updateCounterOne = () => {
		setCounterOne(counterOne + 1);
	};

	// const isCounterOneEven = () => {
	//     let i=0;
	//     while(i <2000000000) i++;
	//     return counterOne%2 ===0
	// }

	const isCounterOneEven = useMemo(() => {
		let i = 0;
		while (i < 2000000000) i++;
		return counterOne % 2 === 0;
	},[counterOne]);

	const updateCounterTwo = () => {
		setCounterTwo(counterTwo + 1);
	};

	return (
		<div>
			<button onClick={updateCounterOne}>
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
