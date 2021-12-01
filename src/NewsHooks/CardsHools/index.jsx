import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const CardsHooks = ({ news }) => {
	return (
		<Col lg={3} md={4} sm={12}>
			<Card>
				<Card.Img variant="top" src={news.urlToImage} />
				<Card.Body>
					<Card.Title>{news.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{`${news.author} ${news.publishedAt}`}
					</Card.Subtitle>
					<Card.Text>{news.description}</Card.Text>
					<Button href={news.url} variant="dark">
						See Detail...
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default CardsHooks;
