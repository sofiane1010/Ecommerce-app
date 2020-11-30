import React from "react";
import { connect } from "react-redux";

import "./BurgerMenu.scss";
import * as action from "../../../redux/actions";

const BurgerMenu = ({ dispatch }) => {
	return (
		<div
			className="burger-menu"
			onClick={() => dispatch(action.toggleSideDrawer())}
		>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default connect()(BurgerMenu);
