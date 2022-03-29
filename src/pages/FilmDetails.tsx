import React, { useCallback, useEffect, useState, MouseEvent } from "react";
import { useParams } from "react-router-dom";
import { Film, FilmParams, Character } from "../models/Film";
import TablComponent from "../components/TableComponent";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import styles from "./FilmDetails.module.css";

const FilmDetails: React.FC = (props) => {
	const [filmState, setFilmState] = useState<Film>();
	const [characters, setCharacters] = useState<Character[]>([]);
	const params = useParams<FilmParams>();

	const fetchFilm = useCallback(async () => {
		try {
			const response = await (
				await fetch(`https://swapi.dev/api/films/${params.filmId}`)
			).json();

			const movie = {
				filmId: +params.filmId,
				title: response.title,
				episode_id: response.episode_id,
				director: response.director,
				opening_crawl: response.opening_crawl,
				url: response.url,
			};

			const charactersResponse: string[] = [...response.characters];

			const res = await Promise.all(
				charactersResponse.map((u) => fetch(u))
			);
			const jsons = await Promise.all(res.map((r) => r.json()));

			const movieChars = jsons.map((json) => {
				return {
					name: json.name,
					birth_year: json.birth_year,
					gender: json.gender,
				};
			});

			setFilmState(movie);
			setCharacters(movieChars);
		} catch (err: any) {
			console.log(err.message);
		}
	}, [params.filmId]);

	const onShareDetails = (e: MouseEvent) => {
		e.preventDefault();
		window.navigator.clipboard.writeText(window.location.href);
	};

	useEffect(() => {
		fetchFilm();
	}, [fetchFilm]);

	return (
		<div className={styles.details_container}>
			<Card className={styles.detail_item}>
				<Card.Header className={styles.detail_title}>
					Episode {filmState?.episode_id}
				</Card.Header>
				<Card.Body>
					<Card.Title className={styles.detail_episode}>
						{filmState?.title}
					</Card.Title>
					<Card.Text className={styles.detail_director}>
						{filmState?.director}
					</Card.Text>
					<Button
						className={styles.share_button}
						onClick={onShareDetails}
					>
						<i className="fa-solid fa-share"></i>
					</Button>
				</Card.Body>
			</Card>
			<TablComponent characters={characters} />
		</div>
	);
};

export default FilmDetails;
