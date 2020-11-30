import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./NavigationLink.scss";

import * as action from "../../../../redux/actions";
const NavigationLink = ({ option, path, dispatch }) => {
	return (
		<NavLink
			to={path}
			className="navigation-link"
			activeClassName="active-link"
			onClick={() => dispatch(action.toggleSideDrawer())}
		>
			{option}
		</NavLink>
	);
};

export default connect()(NavigationLink);
