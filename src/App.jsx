import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllCountries from "./components/AllCountries";
import SingleCountry from "./components/SingleCountry";

function App() {
	return (
		<div className='w-screen h-screen flex flex-col'>
			<nav className='w-full p-8 bg-gray-700 text-white text-4xl font-[800]'>
				<div>Where In The World</div>
			</nav>
			<Routes>
				<Route path='/:name' element={<SingleCountry />} />
				<Route path='/' element={<AllCountries />} />
			</Routes>
		</div>
	);
}

export default App;
