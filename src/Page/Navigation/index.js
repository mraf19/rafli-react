import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default class Navigation extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Muhammad Rafli</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#aboutme">About Me</Nav.Link>
						<Nav.Link href="#skillhobby">Skills {"&"} Hobbies</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}
