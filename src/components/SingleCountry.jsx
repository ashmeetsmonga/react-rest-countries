import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleCountry = () => {
	const fetchCountry = async () => {
		return await axios
			.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
			.then((res) => {
				console.log(res.data);
				return data;
			})
			.catch((err) => console.log(err));
	};

	let { name } = useParams();

	const { isLoading, data } = useQuery(name, fetchCountry);
	const country = data[0];

	if (isLoading) return <div className='text-white'>Loading...</div>;

	return (
		<div className='w-full h-full flex justify-center items-center bg-gray-800'>
			<div className='w-4/5 flex gap-[8rem]'>
				<div className='w-full'>
					<img className='w-full object-cover rounded-t-md' src={country.flags.svg} alt='' />
				</div>
				<div className='w-full p-8 flex flex-col gap-8'>
					<div className='text-white text-5xl font-bold'>{country.name.common}</div>
					<div className='grid grid-cols-2'>
						<div className='text-white text-lg'>
							Native Name:{" "}
							<span className='text-gray-400 ml-4'>{country.name.nativeName.isl.official}</span>
						</div>
						<div className='text-white text-lg'>
							Population:{" "}
							<span className='text-gray-400 ml-4'>{country.population.toLocaleString("us")}</span>
						</div>
						<div className='text-white text-lg'>
							Currencies:{" "}
							<span className='text-gray-400 ml-4'>
								{Object.keys(country.currencies).join(" ")}
							</span>
						</div>
						<div className='text-white text-lg'>
							Region: <span className='text-gray-400 ml-4'>{country.region}</span>
						</div>
						<div className='text-white text-lg'>
							Languages: <span className='text-gray-400 ml-4'>{country.languages.isl}</span>
						</div>
						<div className='text-white text-lg'>
							Sub Region: <span className='text-gray-400 ml-4'>{country.subregion}</span>
						</div>
						<div className='text-white text-lg'>
							Capital: <span className='text-gray-400 ml-4'>{country.capital}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCountry;
