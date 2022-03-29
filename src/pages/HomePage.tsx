import React from "react";
import Autocomplete from "../components/Autocomplete";
import Films from "../components/Films";

import Logo from "../assets/imgs/starwarsLogo.png";
import styles from "./HomePage.module.css";

function HomePage() {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<div className={styles.social_media}>
					<i className="fa-brands fa-facebook"></i>
					<i className="fa-brands fa-instagram"></i>
					<i className="fa-brands fa-twitter"></i>
					<i className="fa-brands fa-youtube"></i>
				</div>
				<figure>
					<img src={Logo} alt="StarWars Logo" />
				</figure>
				<Autocomplete />
			</header>
			<section>
				<Films />
			</section>
		</React.Fragment>
	);
}

export default HomePage;
