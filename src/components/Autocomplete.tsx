import * as React from "react";

import { FilmsContext } from "../store/film-context";
import { FilmsContextType, Film } from "../models/Film";
import { useState, useContext, useCallback } from "react";

import styles from "./Autocomplete.module.css";

// This component feels like a hack, maybe with more time I would figure it out to clean it
// got an inspiration from a class component here
// https://www.digitalocean.com/community/tutorials/react-react-autocomplete
const Autocomplete: React.FC = () => {
	const { films, updateFilteredFilms } = useContext(
		FilmsContext
	) as FilmsContextType;
	const [suggestionState, setSuggestionState] = useState<number>(0);
	const [filterState, setFilterState] = useState<Film[]>([]);
	const [isSuggestion, setIsSuggestion] = useState<boolean>(false);
	const [autoComplete, setAutocomplete] = useState<string>("");

	// When click an autocomplete
	const onClickFilter = useCallback(
		(e: any, film: Film) => {
			setSuggestionState(0);
			setFilterState([]);
			setIsSuggestion(false);
			setAutocomplete(e.currentTarget.innerText);

			updateFilteredFilms([film]);
		},
		[updateFilteredFilms]
	);

	const onKeyDown = useCallback(
		(e: any) => {
			if (e.keyCode === 13) {
				setSuggestionState(0);
				setIsSuggestion(false);
				setAutocomplete(filterState[suggestionState].title);
			} else if (e.keyCode === 38) {
				if (suggestionState === 0) {
					return;
				}
				setSuggestionState((prevSuggestion) => {
					return prevSuggestion - 1;
				});
			} else if (e.keyCode === 40) {
				if (suggestionState - 1 === filterState.length) {
					return;
				}
				setSuggestionState((prevState) => {
					return prevState + 1;
				});
			}
		},
		[suggestionState, filterState]
	);

	const onChange = useCallback(
		(e: any) => {
			updateFilteredFilms(films);
			const suggestions = films;
			const userInput = e.currentTarget.value;

			const filteredSuggestions = suggestions.filter(
				(suggestion) =>
					suggestion.title
						.toLowerCase()
						.indexOf(userInput.toLowerCase()) > -1
			);

			setSuggestionState(0);
			setFilterState(filteredSuggestions);
			setIsSuggestion(true);
			setAutocomplete(e.currentTarget.value);
			if (e.currentTarget.value !== "") {
				updateFilteredFilms(filterState);
			} else {
				updateFilteredFilms(films);
			}
		},
		[films, filterState, updateFilteredFilms]
	);

	let suggestionsJsx: {}; // I need to set the correct type for this value

	if (isSuggestion && autoComplete) {
		if (filterState.length) {
			suggestionsJsx = (
				<ul className={styles.suggestions}>
					{filterState.map((suggestion, index) => {
						let className;

						if (index === suggestionState) {
							className = "suggestion-active";
						}
						return (
							<li
								className={className}
								key={index}
								onClick={(e) => onClickFilter(e, suggestion)}
							>
								{suggestion.title}
							</li>
						);
					})}
				</ul>
			);
		}
	} else {
		suggestionsJsx = (
			<div className="no-suggestions">
				<p>No suggestions available.</p>
			</div>
		);
	}

	return (
		<React.Fragment>
			<div className={styles.autocomplete_container}>
				<div className={styles.input_container}>
					<div className={styles.search_container}>
						<input
							className={styles.autocomplete}
							type="text"
							value={autoComplete}
							onKeyDown={onKeyDown}
							onChange={onChange}
						/>
						<i className="fa-solid fa-magnifying-glass"></i>
					</div>
				</div>
				{/* THe suggestions should not be null */}
				{isSuggestion && suggestionsJsx!}
			</div>
		</React.Fragment>
	);
};

export default React.memo(Autocomplete);
