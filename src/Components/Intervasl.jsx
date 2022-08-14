import React, { useEffect, useRef, useState } from "react";

const Intervasl = () => {
	const intervalRef = useRef();
    const inputRef = useRef();
    const [value, setValue] = useState("");
	const [timer, setTimer] = useState(0);
	useEffect(() => {
        inputRef.current = value;
		// intervalRef.current = setInterval(() => {
		// 	setTimer((prev) => prev + 1);
		// }, 1000);
		// return () => {
		// 	clearInterval(intervalRef.current);
		// };
	}, [value]);
	return (
		<div>
			Timer - {timer}
			<button onClick={() => {inputRef.current.focus();console.log(inputRef.current);clearInterval(intervalRef.current);}}>Stop</button>
            <input value={value} ref = {inputRef} onChange={(e) => setValue(e.target.value)}type="text"/>
            <h2> Value: {inputRef.current}</h2>
		</div>
	);
};

export default Intervasl;

// The useRef Hook allows you to persist values between renders.

// It can be used to store a mutable value that does not cause a re-render when updated.

// It can be used to access a DOM element directly.

// In general, we want to let React handle all DOM manipulation.

// But there are some instances where useRef can be used without causing issues.

// In React, we can add a ref attribute to an element to access it directly in the DOM.


// import { useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }