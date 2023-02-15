import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import CountryCard from "./CountryCard";

const AllCountries = () => {
	const fetchAllCountries = async () => {
		const { data } = await axios.get("https://restcountries.com/v3.1/all");
		console.log(data);
		return data;
	};

	const { error, data, isLoading, isFetching } = useQuery("countries", fetchAllCountries);

	return (
		<div className='w-full grid grid-cols-4 gap-[4rem] bg-gray-800 pt-8 px-8'>
			{data?.map((country, idx) => (
				<CountryCard key={idx} country={country} />
			))}
		</div>
	);
};

export default AllCountries;
