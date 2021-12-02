import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalNav from "./GlobalNav";
import Components from "./Components";
import Page from "./Page";
import Form from "./Form";
import News from "./News";
import NewsHooks from "./NewsHooks";

function App() {
	return (
		<Fragment>
			<GlobalNav />
			<Routes>
				<Route path="/" element={<Components />} />
				<Route path="bio" element={<Page />} />
				<Route path="form" element={<Form />} />
				<Route path="news" element={<News />} />
				<Route path="newshooks" element={<NewsHooks />} />
			</Routes>
		</Fragment>
	);
}

export default App;
