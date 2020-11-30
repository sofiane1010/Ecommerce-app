import React from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../../redux/selectors";

import "./NavigationLinks.scss";

import NavigationLink from "./NavigationLink/NavigationLink";

let NavigationLinks = ({ isAuth, toggleSideDrawer }) => {
	return (
		<ul className="links-container">
			<li className="link">
				<NavigationLink path="/shop" option="SHOP" clicked={toggleSideDrawer} />
			</li>
			<li className="link">
				<NavigationLink
					path="/contact"
					option="CONTACT"
					clicked={toggleSideDrawer}
				/>
			</li>
			<li className="link">
				{isAuth ? (
					<NavigationLink
						path="/signout"
						option="SIGN OUT"
						clicked={toggleSideDrawer}
					/>
				) : (
					<NavigationLink
						path="/auth"
						option="SIGN IN"
						clicked={toggleSideDrawer}
					/>
				)}
			</li>
		</ul>
	);
};

const mapStateToProps = (state) => ({
	isAuth: selectCurrentUser(state) !== null,
});

NavigationLinks = connect(mapStateToProps)(NavigationLinks);

export default NavigationLinks;
