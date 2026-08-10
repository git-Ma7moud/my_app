import Header from "./components/header/header";
import Overview from "./components/content/overview";
import "./App.css";

const App = () => {
	return (
		<div className='container'>
			<Header></Header>
			<Overview></Overview>
		</div>
	);
};

export default App;
