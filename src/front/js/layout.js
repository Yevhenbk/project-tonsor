import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import Politicpriv from "./pages/politicpriv";
import Conduse from "./pages/conduse";
import Aboutus from "./pages/aboutus";
import Contactus from "./component/contactus";
import { ChooseTonsor } from "./pages/chooseTonsor";
import { Reviews } from "./pages/reviews.js";


import { BarberProfile } from "./pages/barberProfile.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>

						<Route exact path="/politcs">
							<Politicpriv />
						</Route>
						<Route exact path="/conduse">
							<Conduse />
						</Route>
						<Route exact path="/aboutus">
							<Aboutus />
						</Route>
						<Route exact path="/contactus">
							<Contactus />

						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/chooseTonsor">
							<ChooseTonsor />
						</Route>
						<Route exact path="/reviews/:id">
							<Reviews />
						</Route>
						<Route exact path="/barberProfile">
							<BarberProfile />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
