import { useEffect, useState } from "react";

const App = () => {
	const [fetchedData, setFetchedData] = useState()


	useEffect(() => {
		const getData = async (link) => {
			try {
				const res = await fetch(link)
				const data = await res.json();
				console.log(data.posts[1].title)
				setFetchedData(data)
			} catch (er) {
				console.error(er);

			}
		}
		getData("https://dummyjson.com/posts")
		return () => {

		}

	}

		, []
	)

	return (
		<>
			<h1>{JSON.stringify(fetchedData)}</h1>
		</>
	);
}
export default App;
