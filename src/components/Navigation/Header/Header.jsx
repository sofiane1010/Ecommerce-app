import React from "react";

import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from "../../UI/Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BasketDropDown from "../../BasketDropDown/BasketDropDown";
import "./Header.scss";

const Header = ({ closeSideDrawer, showBasket, toggleBasketDropDown }) => (
	<header className="header">
		<BurgerMenu clicked={closeSideDrawer} />
		<Logo />
		<nav className="nav-bar">
			<NavigationLinks toggleBasket={toggleBasketDropDown} />
		</nav>
		<BasketDropDown
			show={showBasket}
			toggleBasketDropDown={toggleBasketDropDown}
		/>
	</header>
);

export default Header;
