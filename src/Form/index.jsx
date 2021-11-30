import React, { Component } from "react";
import Input from "./Input";
import * as Validator from "validatorjs";
import "./index.css";

export default class Form extends Component {
	state = {
		username: "",
		password: "",
		errors: [],
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { username, password } = this.state;

		let data = {
			username,
			password,
		};

		let rules = {
			username: "required|min:8",
			password: "required|min:8",
		};

		let validation = new Validator(data, rules);
		validation.passes();
		this.setState({
			errors: [
				...validation.errors.get("username"),
				...validation.errors.get("password"),
			],
		});

		if (validation.passes()) {
			alert(`
			Username : ${this.state.username}
			Password : ${this.state.password}`);
			this.setState({
				username: "",
				password: "",
				errors: [],
			});
		}
	};
	render() {
		return (
			<div className="form">
				<form onSubmit={this.handleSubmit}>
					{this.state.errors ? (
						<ul className="list">
							{this.state.errors.map((error, i) => (
								<li key={i}> {error} </li>
							))}
						</ul>
					) : null}
					<h4>Login Page</h4>
					<Input
						type="text"
						label="username"
						name="username"
						onChange={(value) => {
							this.setState({ username: value });
						}}
					/>
					<Input
						type="password"
						label="password"
						name="password"
						onChange={(value) => this.setState({ password: value })}
					/>
					<button className="btn-input" type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
}
