// import Projects from "./Projects";
import About from "./About";
import LandingPage from "./LandingPage";
import Work from "./Work";
import Footer from "./Footer";

import { Route, Routes } from "react-router-dom";

//TODO fix react routes! it worked but then it did not, why??

const Site = () => {
	return (
		<div>
			{/* <LandingPage />  */}
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
