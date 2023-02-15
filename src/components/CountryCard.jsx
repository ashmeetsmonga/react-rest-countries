import React from "react";

const CountryCard = ({ country }) => {
	return (
		<div className='w-full flex flex-col outline bg-gray-700'>
			<img className='w-1/2 h-1/2 object-cover' src={country.flags.svg} alt='' />
			<div className='flex flex-col gap-4'>
				<div className='font-[600] text-white'>{country.name.official}</div>
			</div>
		</div>
	);
};

export default CountryCard;
