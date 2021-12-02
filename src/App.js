import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalNav from "./GlobalNav";
import Components from "./Components";
import Page from "./Page";
import Form from "./Form";
import News from "./News";
import NewsHooks from "./NewsHooks";
import Counter from "./Counter";
import store from "./App/store";

function App() {
	return (
		<Fragment>
			<Provider store={store}>
				<GlobalNav />
				<Routes>
					<Route path="/" element={<Components />} />
					<Route path="bio" element={<Page />} />
					<Route path="form" element={<Form />} />
					<Route path="news" element={<News />} />
					<Route path="newshooks" element={<NewsHooks />} />
					<Route path="counter" element={<Counter />} />
				</Routes>
			</Provider>
		</Fragment>
	);
}

export default App;
