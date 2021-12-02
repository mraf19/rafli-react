//Libraries
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Axios from "axios";
//Components
import CardsHooks from "./CardsHools";
import NavHooks from "./NavHooks";
import SearchHooks from "./SearchHooks";

const NewsHooks = () => {
	const [news, setNews] = useState([]);
	const [input, setInput] = useState("");
	const [inputButton, setInputButton] = useState("");
	const fetch = (url) => {
		return Axios.get(url);
	};

	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/top-headlines?apiKey=0c69b697972d4b79b652debaab75cf47&sortBy=popularity&language=id&country=id",
		)
			.then((res) => {
				setNews(res.data.articles);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		fetch(
			`https://newsapi.org/v2/top-headlines?apiKey=0c69b697972d4b79b652debaab75cf47&sortBy=popularity&language=id&country=id&q=${inputButton}`,
		)
			.then((res) => {
				setNews(res.data.articles);
			})
			.catch((err) => console.log(err));
	}, [inputButton]);

	return (
		<Fragment>
			<NavHooks />
			<Container fluid>
				<SearchHooks
					onChange={(value) => {
						setInput(value);
					}}
				/>
				<Button
					className="mb-3"
					variant="dark"
					onClick={() => setInputButton(input)}
				>
					Search
				</Button>
				<Row>
					{news.length ? (
						news.map((n, i) => {
							return <CardsHooks news={n} key={i} />;
						})
					) : (
						<h4>Selamat Datang!</h4>
					)}
				</Row>
			</Container>
		</Fragment>
	);
};

export default NewsHooks;
