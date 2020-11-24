import React from "react";

import "./MenuItems.scss";
import MenuItem from "./MenuItem/MenuItem";
import categories from "./categories";

const MenuItems = () => {
	const menuItems = categories.map(({ id, ...otherProps }) => (
		<MenuItem key={id} {...otherProps} />
	));
	return <div className="menu-items">{menuItems}</div>;
};

export default MenuItems;
