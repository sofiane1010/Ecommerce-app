import React from "react";
import "./NavigationLink.scss";

import { NavLink } from "react-router-dom";
const NavigationLink = ({ option, path, closeSideDrawer }) => {
	return (
		<NavLink
			to={path}
			className="navigation-link"
			activeClassName="active-link"
			onClick={closeSideDrawer}
		>
			{option}
		</NavLink>
	);
};

export default NavigationLink;
