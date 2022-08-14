import React from "react";

const Button = ({  text, handleClick }) => {
	// console.log("handleClick", handleClick, text);
	return (
		<div>
			<Button onClick={handleClick}>{text}</Button>
		</div>
	);
};

export default Button;
