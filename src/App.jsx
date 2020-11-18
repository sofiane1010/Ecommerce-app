import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import "./App.scss";

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/auth" component={Auth} />
				<Route path="/shop" component={Shop} />
				<Route exact path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
		</Layout>
	);
};

export default App;
