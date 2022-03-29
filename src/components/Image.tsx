import React from "react";

const Image: React.FC<{ name: string }> = (props) => {
	try {
		// Import image on demand
		const image = require(`../assets/imgs/episode1`);

		// If the image doesn't exist. return null
		if (!image) return null;
		return <img src={image.default} alt={props.name} />;
	} catch (error) {
		console.log(`Image with name "${props.name}" does not exist`);
		return null;
	}
};

export default Image;
