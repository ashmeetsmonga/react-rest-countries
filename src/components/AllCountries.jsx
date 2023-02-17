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
	const [search, setSearch] = useState("");
	const [showFilter, setShowFilter] = useState(false);

	const { error, data, isLoading, isFetching } = useQuery("countries", fetchAllCountries);

	return (
		<div
			className='w-full h-full flex flex-col items-center gap-4 bg-gray-800 p-8 relative'
			onClick={() => setShowFilter(false)}
		>
			<div className='w-full px-14 flex justify-between items-center'>
				<div>
					<input
						type='text'
						className='w-[20rem] text-gray-100 text-lg p-2 rounded-md bg-gray-500 outline-none focus:outline-none'
						placeholder='Search Country by Name'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className='relative'>
					<button
						className='p-4 rounded-md bg-gray-700 text-white'
						onClick={(e) => {
							e.stopPropagation();
							setShowFilter((prev) => !prev);
						}}
					>
						Select Region
					</button>
					{showFilter && (
						<div className='absolute top-[120%] -left-6'>
							<ul
								className='cursor-pointer'
								onClick={(e) => {
									e.stopPropagation();
									if (e.target.classList.contains("filterOption"))
										setFilter(e.target.innerText.toLowerCase());
								}}
							>
								<li className='filterOption px-14 text-center p-3 border-b border-gray-400 rounded-t-md bg-gray-700 text-white'>
									All
								</li>
								<li className='filterOption  px-14 text-center p-3 border-b border-gray-400 bg-gray-700 text-white'>
									Africa
								</li>
								<li className='filterOption  px-14 text-center p-3 border-b border-gray-400 bg-gray-700 text-white'>
									Americas
								</li>
								<li className='filterOption  px-14 text-center p-3 border-b border-gray-400 bg-gray-700 text-white'>
									Asia
								</li>
								<li className='filterOption  px-14 text-center p-3 border-b border-gray-400 bg-gray-700 text-white'>
									Europe
								</li>
								<li className='filterOption  px-14 text-center p-3 rounded-b-md bg-gray-700 text-white'>
									Oceania
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
			<div className='flex h-full items-center justify-between gap-6'>
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
					.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()))
					.slice((page - 1) * 4, page * 4)
					.map((country, idx) => (
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
		</div>
	);
};

export default AllCountries;
