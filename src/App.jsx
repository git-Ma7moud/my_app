import Store from "./components/Store";
import { fetchUsers } from "./components/UserSlice";

Store.subscribe(() => {
	console.log(Store.getState().User);
});
Store.dispatch(fetchUsers());

const App = () => {
	return <></>;
};
export default App;
