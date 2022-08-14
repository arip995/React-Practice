import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Components/counter";
import Name from "./Components/name";
import Array from "./Components/array";
import Effect from "./Components/effect";
import Callfunction from "./Components/callfunction";
import CallApi from "./Components/CallApi";
import ComponentA from "./Components/ComponentA";
import UseReducer from "./Components/useReducer";
function App() {
	useEffect(() => {
		// console.log('Hello')
	});
	return (
		<div className="App">
			{/* <Counter /> */}
			{/* <Name /> */}
			{/* <Array /> */}
			{/* <Effect /> */}
			{/* <Callfunction /> */}
			{/* <CallApi /> */}
			{/* <ComponentA /> */}
      <UseReducer />
		</div>
	);
}

export default App;
