import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import "./App.css";
import FilmDetails from "./pages/FilmDetails";
import FilmProvider from "./store/film-context";

function App() {
	return (
		<FilmProvider>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/film/:filmId">
					<FilmDetails />
				</Route>
			</Switch>
		</FilmProvider>
	);
}

export default App;
