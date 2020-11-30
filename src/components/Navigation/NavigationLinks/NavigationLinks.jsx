import React from "react";
import { connect } from "react-redux";

import "./NavigationLinks.scss";
import NavigationLink from "./NavigationLink/NavigationLink";

let NavigationLinks = ({ isAuth }) => {
	return (
		<ul className="links-container">
			<li className="link">
				<NavigationLink path="/shop" option="SHOP" />
			</li>
			<li className="link">
				<NavigationLink path="/contact" option="CONTACT" />
			</li>
			<li className="link">
				{isAuth ? (
					<NavigationLink path="/signout" option="SIGN OUT" />
				) : (
					<NavigationLink path="/auth" option="SIGN IN" />
				)}
			</li>
		</ul>
	);
};

const mapStateToProps = ({ user }) => ({
	isAuth: user.currentUser !== null,
});

NavigationLinks = connect(mapStateToProps)(NavigationLinks);

export default NavigationLinks;
