import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Film, FilmsContextType } from "../models/Film";

export const FilmsContext = React.createContext<FilmsContextType | null>(null);

const FilmProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [films, setFilms] = useState<Film[]>([]);
	const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);

	const fetchFilms = useCallback(async () => {
		try {
			const response = await (
				await fetch("https://swapi.dev/api/films")
			).json();

			// The id of the film it's inside of the url
			const movies = response.results.map(
				(movie: Film, index: number) => {
					return {
						filmId: index + 1,
						epsiode_id: movie.episode_id,
						title: movie.title,
						episode_id: movie.episode_id,
						director: movie.director,
						opening_crawl: movie.opening_crawl,
						url: movie.url,
					};
				}
			);

			setFilms(movies);
			setFilteredFilms(movies);
		} catch (err: any) {
			console.log(err.message);
		}
	}, []);

	useEffect(() => {
		fetchFilms();
	}, [fetchFilms]);

	const updateFilteredFilms = useCallback((films: Film[]) => {
		setFilteredFilms(films);
	}, []);

	const listItems = useMemo(
		() => ({ films, filteredFilms, updateFilteredFilms }),
		[films, filteredFilms, updateFilteredFilms]
	);

	return (
		<FilmsContext.Provider value={listItems}>
			{children}
		</FilmsContext.Provider>
	);
};

export default FilmProvider;
