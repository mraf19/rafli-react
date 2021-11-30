import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

export default class Nav extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">News App</Navbar.Brand>
				</Container>
			</Navbar>
		);
	}
}
