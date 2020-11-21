import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { auth } from "./firebase.utils";

import Loader from "./components/UI/Loader/Loader";
import Layout from "./hoc/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Signout from "./pages/Auth/Signout/Signout";
import "./App.scss";

class App extends Component {
	state = {
		user: null,
		loading: true,
	};

	componentDidMount() {
		this.unsubscribe = auth.onAuthStateChanged((user) => {
			this.setState({ user: user, loading: false });
		});
	}

	componentWillUnmout() {
		this.unsubscribe();
	}

	render() {
		const { user, loading } = this.state;
		const app = loading ? (
			<Loader fullScreen />
		) : (
			<Layout user={user}>
				<Switch>
					<Route path="/signout" component={Signout} />
					<Route path="/auth" component={Auth} />
					<Route path="/shop" component={Shop} />
					<Route exact path="/" component={Home} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		);
		return app;
	}
}

export default App;
