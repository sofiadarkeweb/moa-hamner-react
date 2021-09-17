import "./App.css";
// import Projects from "./components/Projects";
import Aframe from "./components/Aframe"
// import * as Tone from "tone";
// import ToneComp from "./components/ToneComp"

function App() {
	let thisYear = new Date().getFullYear();

// 	const synth = new Tone.Synth().toDestination();

// function playSynth() {
// 	synth.TriggerAttackRelease("C2", "8n");
// }
	return (
		<div className="App">
			<header className="App-header">
			{/* <button onClick={playSynth}>click</button>  */}
			{/* <ToneComp/> */}
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
			
			<Aframe/>
			{/* <Projects /> */}
			<footer>Copyright Moa Hamner {thisYear}</footer>
		</div>
	);
}

export default App;
