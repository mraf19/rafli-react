import React, { Component } from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
	list-style: none;
	padding: 0;
	text-align: center;
	font-style: italic;
`;


export default class Skill extends Component {
    render() {
        return (
            <div className="container mt-5" id="skillhobby">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h3 className="text-center fw-bold">Skills</h3>
                        <Ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </Ul>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h3 className="text-center fw-bold">Hobbies</h3>
                        <Ul>
                            <li>Membaca</li>
                            <li>Mendengar Musik</li>
                            <li>Bermain Game</li>
                            <li>Travelling</li>
                        </Ul>
                    </div>
                </div>
            </div>
				);
    }
}
