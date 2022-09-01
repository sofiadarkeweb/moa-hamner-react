import React from "react";
import { Link } from "react-router-dom";
import Flowers from "../media/flowers.jpg";
import projectData from "./projectdata";
import Project from "./Project";

function createProject(props) {
	return (
		<Project
			key={props.id}
			title={props.title}
			img={props.img}
			year={props.year}
			info={props.info}
		/>
	);
}

const Work = (props) => {
	return (
		<>
			<div className="work-page">
				<img className="landing-picture" src={Flowers} alt="Flowers" />
				<div className="landing-square-work"></div>
				{/* <div className="landing-square-work-inside"> */}

				<div className="cv-container">
					{/* <h2 className="cv-title">Projekt</h2> */}
					{projectData.map(createProject)}
				</div>
			</div>
			<Link className="circle-about-link" to="/about"></Link>
		</>
	);
};

export default Work;
