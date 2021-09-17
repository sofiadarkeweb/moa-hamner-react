import React from "react";
import projectData from "./projectdata";
import Project from "./Project";
// import NavBar from "./NavBar";

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

const Projects = (props) => {
	return (
		<section id="project-list">
			<div className="projects-container">{projectData.map(createProject)}</div>
		</section>
	);
};

export default Projects;
