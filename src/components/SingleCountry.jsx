import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleCountry = () => {
	const fetchCountry = async () => {
		return await axios
			.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	let { name } = useParams();

	const { isLoading, data } = useQuery(name, fetchCountry);

	if (isLoading) return <div className='text-white'>Loading...</div>;

	return (
		<div className='w-full h-full flex justify-center items-center bg-gray-800'>
			<div className='w-4/5 flex gap-8'></div>
		</div>
	);
};

export default SingleCountry;
