import Header from "./components/header/header";
import Overview from "./components/content/overview";
import "./App.css";

const App = () => {
	return (
		<div className='container'>
			<Overview></Overview>
			<Header></Header>
		</div>
	);
};

export default App;
