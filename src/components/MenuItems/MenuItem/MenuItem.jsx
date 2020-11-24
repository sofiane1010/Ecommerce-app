import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.scss";

const menuItem = ({ title, imageUrl, size, history }) => {
	const menuClass = ["menu-item", size ? "large" : null];
	return (
		<div
			className={menuClass.join(" ")}
			onClick={() => history.push(`/shop/${title}`)}
		>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="content">
				<div className="title">{title.toUpperCase()}</div>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(menuItem);
