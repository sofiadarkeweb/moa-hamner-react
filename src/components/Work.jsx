import React from "react";
import { Link } from "react-router-dom";
import Flowers from "../media/flowers.jpg";

const Work = () => {
	// function doSomething() {
	// 	console.log("hej");
	// }
	return (
		<div className="about-page">
			{/* <img className="landing-picture" src={Eye} alt="My eye" /> */}
			<img className="landing-picture" src={Flowers} alt="Flowers" />
			<div className="landing-square-work">
				<h2 className="cv-title">Work</h2>
				<div className="cv-container">
					<p className="cv-text">
						Serotoni - 2021 <br /> Ljudläggare och ljuddesign
						<br />
						<br />
						Serotoni - 2021 <br /> Ljudläggare och ljuddesign
						<br />
						<br />
						Serotoni - 2021 <br /> Ljudläggare och ljuddesign
						<br />
						<br />
						Serotoni - 2021 <br /> Ljudläggare och ljuddesign
						<br />
						<Link className="email-link" to="/">
							Moa
						</Link>
					</p>
					<p className="cv-text">
						Serotoni - 2021 <br /> Ljudläggare och ljuddesign
						<br />
						<br />
						Serotoni - 2021 <br /> Ljudläggare och ljuddesign
						<br />
						<br />
						Serotoni - 2021 <br /> Ljudläggare och ljuddesign
						<br />
						<br />
						Serotoni - 2021 <br /> Ljudläggare och ljuddesign
						<br />
					</p>
				</div>
			</div>
		</div>
	);
};

export default Work;
