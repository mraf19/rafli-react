import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalNav from "./GlobalNav";
import Components from "./Components";
import Page from "./Page";
import Form from "./Form";
import News from "./News";
import NewsHooks from "./NewsHooks";

function App() {
	return (
		<BrowserRouter>
			<GlobalNav />
			<Routes>
				<Route path="/" exact element={<Components />} />
				<Route path="/bio" element={<Page />} />
				<Route path="/form" element={<Form />} />
				<Route path="/news" element={<News />} />
				<Route path="news-hooks/" element={<NewsHooks />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
