import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import "./App.scss";

const App = () => {
	return (
		<Switch>
			<Route path="/shop" component={Shop} />
			<Route exact path="/" component={Home} />
			<Redirect to="/" />
		</Switch>
	);
};

export default App;
