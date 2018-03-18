import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {

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
				<h1>{this.getFullName()}</h1>
				<h3>Shawn Saras SSS</h3>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);