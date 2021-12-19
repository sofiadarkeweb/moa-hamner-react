import React from "react";
import Aframe from "./Aframe";
import { Link } from "react-router-dom";
import Rose from "../media/rose.jpg";

const LandingPage = () => {
	// function doSomething() {
	// 	console.log("hej");
	// }
	return (
		<div className="landing-page">
			<h2 className="landing-sub-title">Ljuddesigner film och radio</h2>
			<header className="landing-header">
				<Link className="title" to="/work">
					Moa <br />
					Hamner
				</Link>
			</header>

			{/* <img className="landing-picture" src={Eye} alt="My eye" /> */}
			<img className="landing-picture" src={Rose} alt="rose" />

			<div className="landing-square">
				<div className="aframe-scene">
					<Aframe />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
