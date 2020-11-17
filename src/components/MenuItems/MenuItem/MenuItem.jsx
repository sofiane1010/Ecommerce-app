import React from "react";
import "./MenuItem.scss";

const menuItem = ({ title, image, size }) => {
	const menuClass = ["menu-item", size ? "large" : null];
	return (
		<div className={menuClass.join(" ")}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${image})` }}
			/>
			<div className="content">
				<div className="title">{title.toUpperCase()}</div>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default menuItem;
