import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class Search extends Component {
	render() {
		return (
			<Container fluid>
				<Form className="mx-auto my-5">
					<Form.Control
						type="text"
						placeholder="Search News"
						onChange={(e) => this.props.onChange(e.target.value)}
					/>
					<br />
					<Button
						onClick={(e) => this.props.onClick(() => true)}
						variant="dark"
					>
						Search
					</Button>
				</Form>
			</Container>
		);
	}
}
