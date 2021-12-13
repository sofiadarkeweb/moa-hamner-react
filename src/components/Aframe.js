import React from "react";
// import Head from "next/head";
import { Entity, Scene } from "aframe-react";
import * as Tone from "tone";
// import Sound from "../media/TESTHEMSIDA.wav";
import Sound1 from "../media/1.wav";
import Sound2 from "../media/2.wav";

// const synth = new Tone.Synth().toDestination();

const player = new Tone.Player(Sound2).toDestination();

// const tones = [Sound1, Sound2];

// let tones = new Tone.Buffers({
// 	1: Sound1,
// 	2: Sound2,
// });

// let buff1 = new Tone.Buffers(Sound1);
// let buff2 = new Tone.Buffers(Sound2);
// let tones = [buff1, buff2];

// const player = new Tone.Player({
// 	ready1: buff1,
// 	ready2: buff2,
// }).toDestination();

// const player = new Tone.Player().toDestination();
// const player = new Tone.Player(Sound1).toDestination();

// function playSynth() {
// 	synth.TriggerAttackRelease("C2", "8n");
// }

export class Aframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appRendered: false,
			color: "#FFC903",
		};
	}

	componentDidMount() {
		if (typeof window !== "undefined") {
			require("aframe");

			this.setState({ appRendered: true });
		}
	}

	// playNote(note) {
	// 	synth.triggerAttackRelease(`${note}4`, "8n");
	// }

	// var soundSamples = new Tone.Buffers({
	// 	"1" : Sound1,
	// 	"2" : Sound2
	// 	...
	// },

	playSound() {
		// const tones = [Sound1, Sound2];
		// console.log(tones);
		Tone.loaded().then(() => {
			player.start();
		});
		// return tones;
	}

	changeColor() {
		const colors = ["#c8553d", "#2d6a4f", "#FFB703", "#FB8500"];
		// tones = [];
		const tones = [Sound1, Sound2];
		// const tones = ["D", "G", "A", "C4"];

		this.setState({
			color: colors[Math.floor(Math.random() * colors.length)],
		});
		console.log("colors change");
		// this.playNote(tones[Math.floor(Math.random() * tones.length)]);
		// this.setState(
		this.playSound(tones[Math.floor(Math.random() * tones.length)]);
		// );
		// this.playSound({ tones });

		// console.log(tones);
		// console.log(tones[Math.floor(Math.random() * tones.length)]);
	}

	changeSound() {}

	render() {
		return (
			<div style={{ height: "100%", width: "100%" }}>
				{/* <header>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>A-Frame React animation</title>
				</header> */}

				{this.state.appRendered && (
					<div>
						<Scene shadow="type: pcfsoft">
							<Entity primitive="a-light" type="ambient" color="#F72585" />
							<Entity
								primitive="a-light"
								type="point"
								intensity="1"
								position="2 4 4"
							/>
							{/* <Button events= {{click: this.playMpthree.bind(this)}}></Button> */}

							<Entity
								id="tetrahedron"
								geometry={{ primitive: "tetrahedron" }}
								material={{ color: this.state.color, opacity: 0.8 }}
								animation__rotate={{
									property: "rotation",
									dur: 80000,
									loop: true,
									to: "360 360 360",
									easing: "linear",
								}}
								position={{ x: 0, y: 2, z: -0.8 }}
								events={{ click: this.changeColor.bind(this) }}
							></Entity>
							<Entity
								id="box"
								geometry={{ primitive: "cone" }}
								material={{ color: "#FB8500", opacity: 0.8 }}
								animation__rotate={{
									property: "rotation",
									dur: 60000,
									loop: true,
									to: "360 360 360",
									easing: "linear",
								}}
								position={{ x: -1, y: 2, z: -0.5 }}
								events={{ click: this.changeColor.bind(this) }}
							></Entity>

							<Entity primitive="a-camera">
								<Entity
									primitive="a-cursor"
									animation__click={{
										property: "scale",
										startEvents: "click",
										from: "0.1 0.1 0.1",
										to: "1 1 1",
										dur: 150,
									}}
								/>
							</Entity>
							{/* dodecahedron */}
							<Entity
								geometry={{ primitive: "dodecahedron" }}
								material={{ color: "#6a040f", opacity: 0.8 }}
								position={{ x: 0.5, y: 1, z: -2 }}
								animation__rotate={{
									property: "rotation",
									dur: 50000,
									loop: true,
									to: "360 360 360",
								}}
								events={{ click: this.changeColor.bind(this) }}
							/>
							<Entity
								geometry={{ primitive: "cone" }}
								material={{ color: this.state.color, opacity: 0.6 }}
								position={{ x: 1, y: 1, z: -1 }}
								animation__rotate={{
									property: "rotation",
									dur: 40000,
									loop: true,
									to: "360 360 360",
								}}
								events={{ click: this.changeColor.bind(this) }}
							/>

							<Entity light={{ type: "point" }} />
						</Scene>
					</div>
				)}
			</div>
		);
	}
}

export default Aframe;
