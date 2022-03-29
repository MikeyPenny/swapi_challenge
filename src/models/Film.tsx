export type Film = {
	filmId: number;
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	url: string;
};

export type Character = {
	name: string;
	birth_year: string;
	gender: string;
};

export type FilmsContextType = {
	films: Film[];
	filteredFilms: Film[];
	updateFilteredFilms: (films: Film[]) => void;
};

export type FilmContextType = {
	films: Film;
};

export type FilmParams = {
	filmId: string;
};
