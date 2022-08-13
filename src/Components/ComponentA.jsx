import React, { useEffect, useState } from "react";
import ComponentB from "./ComponentB";
export const UserContext = React.createContext();
export const NameContext = React.createContext();
const ComponentA = () => {
	const [name, setName] = useState({});
	const [first, setfirst] = useState();
	useEffect(() => {
		setName({ firstName: "John", lastName: "Doe" });
	}, []);
	useEffect(() => {
		console.log(name);
	}, [name]);
	return (
		<div>
			<UserContext.Provider value={name}>
				<ComponentB />
			</UserContext.Provider>
		</div>
	);
};

export default ComponentA;
