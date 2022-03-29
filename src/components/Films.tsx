import React, { useContext } from "react";

import { FilmsContext } from "../store/film-context";
import FilmItem from "./FilmItem";
import { FilmsContextType } from "../models/Film";
import styles from "./Films.module.css";
import { imagesCollectionIndex } from "../util/images.js";

const Films: React.FC = (props) => {
	const { filteredFilms } = useContext(FilmsContext) as FilmsContextType;

	return (
		<ul className={styles.movie_list}>
			{filteredFilms.map((item, index) => (
				<FilmItem
					key={index}
					title={item.title}
					filmId={item.filmId}
					episode_id={item.episode_id}
					opening_crawl={item.opening_crawl}
					image={imagesCollectionIndex[index].href}
				/>
			))}
		</ul>
	);
};

export default React.memo(Films);
