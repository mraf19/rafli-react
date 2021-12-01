import React from "react";
import { Form } from "react-bootstrap";

const SearchHooks = ({ onChange }) => {
	return (
        <Form className="mx-auto my-5">
            <Form.Control
                type="text"
                placeholder="Search News"
                onChange={(e) => onChange(e.target.value)}
            />
        </Form>
	);
};

export default SearchHooks;
