import React from "react";

import "./Button.scss";
const Button = ({ children, color, ...otherProps }) => {
	const buttonClasses = `button ${color}`;
	return (
		<button className={buttonClasses} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
