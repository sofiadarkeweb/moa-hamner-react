import React from "react";
import { Link } from "react-router-dom";
import Eye from "../media/eye.jpg";

const About = () => {
	// function doSomething() {
	// 	console.log("hej");
	// }
	return (
		<div className="about-page">
			{/* <img className="landing-picture" src={Eye} alt="My eye" /> */}
			<img className="landing-picture" src={Eye} alt="My eye" />
			<div className="landing-square-about">
				<p className="about-text">
					Quisque a porta dui, ac aliquet lorem. Cras cursus ligula felis, nec
					gravida metus lobortis tincidunt. Morbi cursus arcu a urna auctor
					ullamcorper. Curabitur consequat convallis urna, id porta tortor
					volutpat sed. Nunc a odio luctus, sagittis felis et, mollis tellus.
					Curabitur efficitur nulla mauris, in ultrices arcu posuere a.
					Curabitur sagittis lacus urna, ut rutrum dui volutpat a.
					<br />
					<br />
					<a className="email-link" href="mailto:moahamner@hotmail.com">
						Kontakta mig
					</a>
					<br />
					<Link className="email-link" to="/work">
						Work
					</Link>
				</p>
			</div>
		</div>
	);
};

export default About;
