import React from "react";
import { Character } from "../models/Film";
import Table from "react-bootstrap/Table";
import styles from "./TableComponent.module.css";

const TablComponent: React.FC<{
	characters: Character[];
}> = (props) => {
	return (
		<Table className={styles.table} bordered hover variant="dark">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Birth Year</th>
					<th>Gender</th>
				</tr>
			</thead>
			<tbody>
				{props.characters.map((character, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{character.name}</td>
						<td>{character.birth_year}</td>
						<td>{character.gender}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default TablComponent;
