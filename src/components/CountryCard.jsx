import React from "react";

const CountryCard = ({ country }) => {
	return (
		<div className='flex flex-col bg-gray-700 rounded-md'>
			{/* <img className='h-1/2 object-cover rounded-t-md' src={country.flags.svg} alt='' /> */}
			<div className='flex flex-col gap-4 mt-8 px-4'>
				<div className='font-[600] text-white text-xl'>{country.name.official}</div>
				<div className='flex flex-col gap-0.5'>
					<div className='text-white text-sm'>
						Population : <span className='text-gray-400'>{country.population}</span>
					</div>
					<div className='text-white text-sm'>
						Region : <span className='text-gray-400'>{country.region}</span>
					</div>
					<div className='text-white text-sm'>
						Capital : <span className='text-gray-400'>{country.capital}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryCard;
