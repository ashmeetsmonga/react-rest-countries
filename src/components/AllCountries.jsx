import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import CountryCard from "./CountryCard";

const AllCountries = () => {
	const fetchAllCountries = async () => {
		const { data } = await axios.get("https://restcountries.com/v3.1/all");
		console.log(data);
		return data;
	};

	const [page, setPage] = useState(0);

	const { error, data, isLoading, isFetching } = useQuery("countries", fetchAllCountries);

	return (
		<div className='w-full h-full flex justify-center items-center gap-4 bg-gray-800'>
			{data.slice(page, page + 4)?.map((country, idx) => (
				<CountryCard key={idx} country={country} />
			))}
		</div>
	);
};

export default AllCountries;
