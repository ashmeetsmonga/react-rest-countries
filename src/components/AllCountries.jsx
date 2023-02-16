import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const AllCountries = () => {
	const fetchAllCountries = async () => {
		const { data } = await axios.get("https://restcountries.com/v3.1/all");
		console.log("data fetched");
		return data;
	};

	const [page, setPage] = useState(1);

	const { error, data, isLoading, isFetching } = useQuery("countries", fetchAllCountries);

	return (
		<div className='w-full h-full flex justify-center items-center gap-4 bg-gray-800 p-8'>
			<button
				className='text-white text-6xl font-[800] disabled:text-gray-600'
				disabled={page === 1}
				onClick={() => setPage((prev) => prev - 1)}
			>
				{"<"}
			</button>
			{data?.slice((page - 1) * 4, page * 4)?.map((country, idx) => (
				<Link key={idx} to={`/${country.name.common}`}>
					<CountryCard country={country} />
				</Link>
			))}
			<button
				className='text-white text-6xl font-[800] disabled:text-gray-600'
				disabled={page === 125}
				onClick={() => setPage((prev) => prev + 1)}
			>
				{">"}
			</button>
		</div>
	);
};

export default AllCountries;
