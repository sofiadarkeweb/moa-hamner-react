import React from "react";

import { Entity, Scene } from "aframe-react";
// import * as Tone from "tone";

// const synth = new Tone.Synth().toDestination();



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

	changeColor() {
		const colors = ["#c8553d", "#2d6a4f", "#FFB703", "#FB8500"];
		// const tones = ["D", "G", "A", "C4"];
		this.setState({
			color: colors[Math.floor(Math.random() * colors.length)],
		});
	// 	this.playNote(tones[Math.floor(Math.random() * tones.length)]);
	// 	console.log(tones[Math.floor(Math.random() * tones.length)]);
	// }

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
