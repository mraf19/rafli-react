import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
	decrementCheck,
	increment,
} from "../App/Features/CounterFeature/action";

function Counter() {
	const Div = styled.div`
		margin: 50px auto;
	`;

	const Button = styled.button`
		padding: 12px;
		background-color: rgb(7, 242, 101);
		color: black;
		border-radius: 15px;
	`;

	const Span = styled.span`
		display: inline-block;
		padding: 5px 50px;
		font-weight: bold;
		font-size: 26px;
	`;

	let { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<Div>
			<Button onClick={() => dispatch(decrementCheck(1))}>-</Button>
			<Span> {count} </Span>
			<Button onClick={() => dispatch(increment(1))}>+</Button>
		</Div>
	);
}

export default Counter;
