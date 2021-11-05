// import Projects from "./Projects";
// import About from "./About";
import LandingPage from "./LandingPage";
// import Work from "./Work";
import Footer from "./Footer";

// import { HashRouter as Router, Route, Switch } from "react-router-dom";

const Site = () => {
	return (
		<div>
			<LandingPage />
			{/* <Router basename="/">
				<div>
					<Switch>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/work">
							<Work />
						</Route>
					</Switch>
				</div>
			</Router> */}
			<Footer />
		</div>
	);
};

export default Site;
