import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Content from "./components/content/Content";

const App = () => {
	return (
		<div className='container'>
			<div className='page-container'>
				<Header></Header>
				<Content></Content>
			</div>
			<Sidebar></Sidebar>
		</div>
	);
};

export default App;
