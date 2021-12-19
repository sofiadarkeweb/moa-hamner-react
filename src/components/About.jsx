import React from "react";
import { Link } from "react-router-dom";
import Eye from "../media/eye.jpg";

const About = () => {
	// function doSomething() {
	// 	console.log("hej");
	// }
	return (
		<div className="about-page">
			<img className="landing-picture" src={Eye} alt="My eye" />

			<div className="landing-square-about">
				<p className="about-text">
					<br />
					+4670 869 15 92
					<br />
					<a className="email-link" href="mailto:moahamner@hotmail.com">
						moahamner@hotmail.com
					</a>
					<br />
					<br />
					Moa Hamner
					<br />
					Thunbergsgatan 7 <br />
					121 37 Stockholm
					<br />
					{/* <a className="email-link" href="mailto:moahamner@hotmail.com">
						Kontakta mig
					</a> */}
					<br />
					<Link className="circle-about-link" to="/"></Link>
					{/* <Link className="email-link" to="/work">
						Work
					</Link> */}
				</p>
			</div>
		</div>
	);
};

export default About;
