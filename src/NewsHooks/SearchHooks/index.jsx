import React from "react";
import { Form } from "react-bootstrap";

const SearchHooks = ({ onChange }) => {
	return (
		<Form className="mx-auto mt-5 mb-3">
			<Form.Control
				type="text"
				placeholder="Search News"
				onChange={(e) => onChange(e.target.value)}
			/>
		</Form>
	);
};

export default SearchHooks;
