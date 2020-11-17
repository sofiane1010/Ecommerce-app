import React from "react";

import "./MenuItems.scss";
import MenuItem from "./MenuItem/MenuItem";
import { categories } from "./categories";

const MenuItems = () => {
	const menuItems = categories.map(({ title, id, imageUrl, size }) => (
		<MenuItem key={id} title={title} size={size} image={imageUrl} />
	));
	return <div className="menu-items">{menuItems}</div>;
};

export default MenuItems;
