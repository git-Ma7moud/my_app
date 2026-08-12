import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Content from "./components/content/Content";

const App = () => {
	return (
		<div className='container'>
			<Sidebar></Sidebar>
			<div className='page-container'>
				<Header></Header>
				<Content></Content>
			</div>
		</div>
	);
};

export default App;
