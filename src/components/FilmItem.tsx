import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import styles from "./FilmItem.module.css";

const FilmItem: React.FC<{
	title: string;
	filmId: number;
	episode_id: number;
	opening_crawl: string;
}> = (props) => {
	const history = useHistory<string>();

	const onClickMovieHandler = useCallback(
		(e: any) => {
			history.push(`/film/${props.filmId}`);
		},
		[props.filmId, history]
	);

	return (
		<Card className={styles.item}>
			<Card.Header className={styles.movie_title}>
				Episode {props.episode_id}
			</Card.Header>
			<Card.Body>
				<Card.Title className={styles.episode_num}>
					{props.title}
				</Card.Title>
				<Card.Text className={styles.opening}>
					{props.opening_crawl}
				</Card.Text>
				<Button className={styles.button} onClick={onClickMovieHandler}>
					See more...
				</Button>
			</Card.Body>
		</Card>
	);
};

export default FilmItem;
