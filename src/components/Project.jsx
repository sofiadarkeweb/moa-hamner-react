// import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";

function Project(props) {
	return (
		<div className="project-box">
			<img className="project-image" src={props.img} alt={props.imgalt} />

			<div className="project-texts">
				<p className="project-title">{props.title}</p>
				<p className="project-sub-title">
					{props.info} {props.year}
				</p>
			</div>
		</div>
	);
}

export default Project;
