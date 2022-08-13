import React, { useEffect, useState } from "react";

const Callfunction = () => {
	const [calls, setCalls] = useState(0);
    const updateCallse = () => {
        setCalls((prevCalls) => prevCalls + 1);
    }
	useEffect(() => {
		let interval = setInterval(updateCallse, 1000);
        return () => clearInterval(interval);
	}, []);
	return <div>{calls}</div>;
};

export default Callfunction;
