// import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

function Project(props) {
	const [hiddenImage, sethiddenImage] = useState(false);

	return (
		<div
			className="cv-text"
			onMouseEnter={() => sethiddenImage(true)}
			onMouseLeave={() => sethiddenImage(false)}
		>
			{hiddenImage && (
				<img className="movie-img" alt="Still from movie" src={props.img}></img>
			)}
			<p className="project-title">{props.title}</p>
			<p className="project-sub">
				{props.info} {props.year}
			</p>
		</div>
	);
}

export default Project;
