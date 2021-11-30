import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Nav from "./Nav";
import Search from "./Search";
import Axios from "axios";

export default class News extends Component {
	state = {
		input: "",
		news: [],
	};

	componentDidMount() {
		Axios.get(
			"https://newsapi.org/v2/top-headlines?apiKey=0c69b697972d4b79b652debaab75cf47&sortBy=popularity&language=id&country=id",
		)
			.then((res) => {
				this.setState({ news: [...res.data.articles] });
			})
			.catch((err) => alert(err));
	}

	handleClick = () => {
		const input = this.state.input;
		this.setState({
			news: [],
		});
		Axios.get(
			"https://newsapi.org/v2/everything?apiKey=0c69b697972d4b79b652debaab75cf47&from=2021-11-24&sortBy=popularity&language=id&q=" +
				input,
		)
			.then((res) => {
				this.setState({ news: [...res.data.articles] }, () =>
					console.log(this.state.news),
				);
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Nav />
				<Search
					onChange={(value) => this.setState({ input: value })}
					onClick={(res) => (res ? this.handleClick() : null)}
				/>
				<Container>
					<Row>
						{this.state.news.length ? (
							this.state.news.map((n) => {
								return <Cards news={n} />;
							})
						) : (
							<h4>
								Selamat Datang! Mohon ditunggu dan periksa kembali koneksi
								internet anda
							</h4>
						)}
					</Row>
				</Container>
			</div>
		);
	}
}
