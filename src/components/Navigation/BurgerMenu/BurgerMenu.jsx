import React from "react";

import "./BurgerMenu.scss";

const BurgerMenu = ({ clicked }) => {
	return (
		<div className="burger-menu" onClick={clicked}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default BurgerMenu;
