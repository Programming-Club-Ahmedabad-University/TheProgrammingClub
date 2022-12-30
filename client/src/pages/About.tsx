import React from "react"
import "../styles/About.css"
export default function About() {
	return (
		<div id="about">
			<div id="top-border">
				<div id="top-border-1"></div>
				<div id="top-border-2"></div>
				<div id="top-border-3"></div>
			</div>

			<div className="grid" id="about-content">
				<div id="picture-container" className="border-none">
					Picture
				</div>
				<div id="middle-border">
					<div id="middle-border-top"></div>
					<div id="middle-border-middle"></div>
					<div id="middle-border-bottom"></div>
				</div>
				<div className="p-12">
					<h1 className="text-2xl p-1">ABOUT</h1>
					<div className="p-2" id="text-container-content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation Ut enim ad minim veniam, quis nostrud
						exercitation
					</div>
				</div>
			</div>

			<div id="bottom-border">
				<div id="bottom-border-1"></div>
				<div id="bottom-border-2"></div>
				<div id="bottom-border-3"></div>
				<div id="bottom-border-4"></div>
			</div>
		</div>
	)
}
