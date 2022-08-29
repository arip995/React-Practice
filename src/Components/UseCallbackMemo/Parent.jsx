import React, { useEffect, useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Header from "./Header";
import Change from "./Change";
const Parent = () => {
	const [age, setAge] = useState(25);
	const [salary, setSalary] = useState(25000);
	const [header, setHeader] = useState("All the details are");

	const incrementAge = useCallback(() => {
		setAge((prev) => prev + 1);
	}, []);
	//It caches the function, the function is only redefined if the state in the second parameter changes
	const incrementSalary = useCallback(() => {
		setSalary((prev) => prev + 10000);
	}, []);

	return (
		<div>
			<Header text={header} />
			<Count text="Age" count={age} />
			<Change text="Increment Age" handleClick={incrementAge} />
			<Count text="Salary" count={salary} />
			<Change text="Increment Salary" handleClick={incrementSalary} />
		</div>
	);
};

export default Parent;

//React memo is a higher order component that will prevent rerender of a functional component to render if its props of state donnot change

//When dealing with functions we have to concider referance equality
//Increment Salary rerenders because each time the parent component rerenders a new incrementsalary function is created
//so with new referance the component Change is rerendered

//UseCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changes
//useCallback will cache the increment salary function and retutn that if salary is not increment

//It is useful when passing callbacks to child component to rely on referance equality to prevent unnecesery renders
