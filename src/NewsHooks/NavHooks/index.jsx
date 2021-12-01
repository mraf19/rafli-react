import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavHooks = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">News Hooks App</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default NavHooks;
