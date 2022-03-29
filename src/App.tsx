import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// import HomePage from "./pages/HomePage";
// import FilmDetails from "./pages/FilmDetails";
import FilmProvider from "./store/film-context";
import Spinner from "react-bootstrap/Spinner";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const FilmDetails = React.lazy(() => import("./pages/FilmDetails"));

function App() {
	return (
		<FilmProvider>
			<Suspense
				fallback={
					<Spinner
						className="spinner"
						animation="border"
						variant="primary"
					/>
				}
			>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route path="/film/:filmId">
						<FilmDetails />
					</Route>
				</Switch>
			</Suspense>
		</FilmProvider>
	);
}

export default App;
