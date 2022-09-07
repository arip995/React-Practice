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
        //function is executed every time the state counterOne changes and it just returns the memoized value on its call
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

// import { useState, useMemo } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

//Usememo caches the result
//used to cache the result of a function
//The React useMemo Hook returns a memoized value.
//The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.



//Code for debouncing
// let timer;
// const processChanges = (callback) => {
// 	clearTimeout(timer);
// 	timer = setTimeout(() => { callback()}, 300);
// };

// let debounceTimer;
// const debounce = (callback, time) => {
//   clearTimeout(debounceTimer);
//   debounceTimer = setTimeout(callback, time);
// }


//Code for throttling
// let throttleTimer;
// const throttle = (callback, time) => {
//   if (throttleTimer) return;
//     throttleTimer = true;
//     setTimeout(() => {
//         callback();
//         throttleTimer = false;
//     }, time);
// }
 
// window.addEventListener("scroll", () => { 
//   throttle(handleScrollAnimation, 250);
// });


