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
	const [filter, setFilter] = useState("all");
	const [showFilter, setShowFilter] = useState(false);

	const { error, data, isLoading, isFetching } = useQuery("countries", fetchAllCountries);

	return (
		<div className='w-full h-full flex justify-center items-center gap-4 bg-gray-800 p-8 relative'>
			<div className='absolute right-20 top-10'>
				<button
					className='p-4 rounded-md bg-gray-700 text-white'
					onClick={() => setShowFilter((prev) => !prev)}
				>
					Select Region
				</button>
				{showFilter && (
					<div className='mt-2'>
						<ul
							className='cursor-pointer'
							onClick={(e) => {
								if (e.target.classList.contains("filterOption"))
									setFilter(e.target.innerText.toLowerCase());
							}}
						>
							<li className='filterOption p-3 border-b border-gray-400 rounded-t-md bg-gray-700 text-white'>
								All
							</li>
							<li className='filterOption p-3 border-b border-gray-400 bg-gray-700 text-white'>
								Africa
							</li>
							<li className='filterOption p-3 border-b border-gray-400 bg-gray-700 text-white'>
								Americas
							</li>
							<li className='filterOption p-3 border-b border-gray-400 bg-gray-700 text-white'>
								Asia
							</li>
							<li className='filterOption p-3 border-b border-gray-400 bg-gray-700 text-white'>
								Europe
							</li>
							<li className='filterOption p-3 rounded-b-md bg-gray-700 text-white'>Oceania</li>
						</ul>
					</div>
				)}
			</div>
			<button
				className='text-white text-6xl font-[800] disabled:text-gray-600'
				disabled={page === 1}
				onClick={() => setPage((prev) => prev - 1)}
			>
				{"<"}
			</button>
			{data
				?.filter((country) => {
					if (filter === "all") return true;
					else return country.region.toLowerCase() === filter;
				})
				.slice((page - 1) * 4, page * 4)
				?.map((country, idx) => (
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
