import React from "react";
import { connect } from "react-redux";

import "./NavigationLinks.scss";
import NavigationLink from "./NavigationLink/NavigationLink";

let NavigationLinks = ({ closeSideDrawer, isAuth }) => {
	return (
		<ul className="links-container">
			<li className="link">
				<NavigationLink
					path="/shop"
					option="SHOP"
					closeSideDrawer={closeSideDrawer}
				/>
			</li>
			<li className="link">
				<NavigationLink
					path="/contact"
					option="CONTACT"
					closeSideDrawer={closeSideDrawer}
				/>
			</li>
			<li className="link checkout">
				<NavigationLink
					path="/checkout"
					option="CHECKOUT"
					closeSideDrawer={closeSideDrawer}
				/>
			</li>
			<li className="link">
				{isAuth ? (
					<NavigationLink
						path="/signout"
						option="SIGN OUT"
						closeSideDrawer={closeSideDrawer}
					/>
				) : (
					<NavigationLink
						path="/auth"
						option="SIGN IN"
						closeSideDrawer={closeSideDrawer}
					/>
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
