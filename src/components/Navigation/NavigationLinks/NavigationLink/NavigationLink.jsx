import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationLink.scss";

const NavigationLink = ({ option, path, clicked }) => {
	return (
		<NavLink
			to={path}
			className="navigation-link"
			activeClassName="active-link"
			onClick={clicked}
		>
			{option}
		</NavLink>
	);
};

export default NavigationLink;
