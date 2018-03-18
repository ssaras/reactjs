import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

	constructor() {
		super();
		this.fname = "Shawn";
		this.lname = "Saras";
	}

	getFullName() {
		return this.fname + " " + this.lname; 
	}

	render() {
		return (
			<div>
				<Header/ >
				<h1>{this.getFullName()}</h1>
				<h3>Shawn Saras SSS</h3>
				<Footer />
			</div>
		);
	}
}