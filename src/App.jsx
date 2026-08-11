import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

const App = () => {
	return (
		<div className='container'>
			<Sidebar></Sidebar>
			<Header></Header>
		</div>
	);
};

export default App;
