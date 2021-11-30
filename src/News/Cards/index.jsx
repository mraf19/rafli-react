import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

export default class Cards extends Component {
	render() {
		return (
			<Col md={3} sm={12}>
				<Card>
					<Card.Img variant="top" src={this.props.news.urlToImage} />
					<Card.Body>
						<Card.Title>{this.props.news.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{`${this.props.news.author} ${this.props.news.publishedAt}`}
						</Card.Subtitle>
						<Card.Text>{this.props.news.description}</Card.Text>
						<Button href={this.props.news.url} variant="dark">
							See Detail...
						</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}
