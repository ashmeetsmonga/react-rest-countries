import { useState } from "react";
import AllCountries from "./components/AllCountries";

function App() {
	return (
		<div className='w-screen h-screen flex flex-col'>
			<nav className='w-full p-8 bg-gray-700 text-white text-4xl font-[800]'>
				<div>Where In The World</div>
			</nav>
			<AllCountries />
		</div>
	);
}

export default App;
