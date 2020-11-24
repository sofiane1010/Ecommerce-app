import React from "react";

import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from "../../UI/Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BasketDropDown from "../../BasketDropDown/BasketDropDown";
import BasketIcon from "../../UI/BasketIcon/BasketIcon";
import "./Header.scss";

const Header = ({ closeSideDrawer, showBasket, toggleBasketDropDown }) => (
	<header>
		<div className="header">
			<BurgerMenu clicked={closeSideDrawer} />
			<Logo />
			<div className="nav-container">
				<nav className="nav-bar">
					<NavigationLinks />
				</nav>
				<BasketIcon clicked={toggleBasketDropDown} />
			</div>

			<BasketDropDown
				show={showBasket}
				toggleBasketDropDown={toggleBasketDropDown}
			/>
		</div>
	</header>
);

export default Header;
