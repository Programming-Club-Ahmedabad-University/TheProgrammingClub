import React from "react"
import "../styles/About.css"
export default function About() {
	return (
		<div id="about">
			<div id="picture-container">Picture</div>
			<div id="middle-border">
				<div id="middle-border-top"></div>
				<div id="middle-border-middle"></div>
				<div id="middle-border-bottom"></div>
			</div>
			<div id="text-container">
				<h1 className="text-xl p-1">About</h1>
				<div className="p-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					Ut enim ad minim veniam, quis nostrud exercitation
				</div>
			</div>
		</div>
	)
}
