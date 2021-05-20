import "./App.css";
import "./styles/layouts.css";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import EventsPage from "./pages/EventsPage";
import EventDetailContainer from "./components/Events/EventDetailContainer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<div className="app">
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" exact component={About} />
						<Route path="/signup" exact component={Signup} />
						<Route path="/signin" exact component={Signin} />
						<Route exact path="/events" component={EventsPage} />
						<Route exact path="/events/:id" component={EventDetailContainer} />
						<Route
							path="/"
							render={() => <div>The 404. This page does not exist</div>}
						/>
					</Switch>
				</div>
				<Footer />
			</Router>
		</>
	)
}

export default App
