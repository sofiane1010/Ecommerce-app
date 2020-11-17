import React from "react";

import "./NavigationLinks.scss";
import NavigationLink from "./NavigationLink/NavigationLink";

const NavigationLinks = ({ closeSideDrawer }) => {
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
			<li className="link">
				<NavigationLink
					path="/auth"
					option="SIGN IN"
					closeSideDrawer={closeSideDrawer}
				/>
			</li>
		</ul>
	);
};

export default NavigationLinks;
