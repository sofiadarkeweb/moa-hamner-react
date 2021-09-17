import "./App.css";
import Projects from "./components/Projects";

function App() {
	let thisYear = new Date().getFullYear();
	return (
		<div className="App">
			<header className="App-header">
				<p className="contact">
					<a href="mailto:moahamner@hotmail.com" className="mail">
						moahamner@hotmail.com
					</a>
					<a href="tel:0708691592">
						<br /> 0708691592
					</a>
				</p>

				<h1 className="page-title">Moa Hamner</h1>
				<h2 className="sub-title">ljuddesign</h2>
			</header>
			<Projects />
			<footer>Copyright Moa Hamner {thisYear}</footer>
		</div>
	);
}

export default App;
