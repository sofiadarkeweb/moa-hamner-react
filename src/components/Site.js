// import Projects from "./Projects";
import About from "./About";
import LandingPage from "./LandingPage";
import Work from "./Work";
import Footer from "./Footer";

// import { BrowserRouter as Router} from "react-router-dom";
import { Route, Routes } from "react-router-dom";

//TODO solve react router

const Site = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default Site;
