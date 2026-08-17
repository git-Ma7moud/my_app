import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./UI/Home";
import Tasks from "./UI/Tasks";
import AddTask from "./UI/AddTask";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/tasks'
					element={<Tasks />}
				/>
				<Route
					path='/add-task'
					element={<AddTask />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
