import React, { Component } from "react";
import styled from "styled-components";
import img from "./img/hero.jpg"


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

export default class Hero extends Component {
	render() {
		return (
			<HeroImg>
                <p class="fs-5 fst-italic text-center fw-bold">Full Stack Developer</p>
				<h1 class="display-5 text-center fw-bold">Muhammad Rafli</h1>
            </HeroImg>
		);
	}
}
