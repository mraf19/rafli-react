import React, { Component } from "react";
import styled from "styled-components";
import img from "./img/hero.jpg";

const HeroImg = styled.div`
	margin: 0;
	padding: 0;
	background-image: url(${img});
	background-size: cover;
	background-position: center;
	height: 600px;
	display: grid;
	place-content: center;
	color: white;
`;

const H1 = styled.h1`
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export default class Hero extends Component {
	render() {
		return (
			<HeroImg>
				<p className="fs-5 fst-italic text-center fw-bold">
					Full Stack Developer
				</p>
				<H1 className="display-5 text-center fw-bold">Muhammad Rafli</H1>
			</HeroImg>
		);
	}
}
