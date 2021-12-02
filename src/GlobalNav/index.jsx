import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function GlobalNav() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto ">
						<Nav.Link>
							<Link to="/">First Page</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="bio">Biography</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="form">Form Validation</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="news">News App</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="newshooks">News App with Hooks </Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="counter">Counter</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default GlobalNav;
