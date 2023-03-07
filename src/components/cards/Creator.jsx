import React from 'react'
import { MdGroups } from 'react-icons/md';
const Creator = ({data}) => {

  return (
		<>
			{data.map((item,index) => (
				<div key={index} className="rounded overflow-hidden shadow-lg">
					<div className="absolute px-2 py-0.5 mx-2 my-1 text-white bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg inline-flex items-center rounded-full">
						<MdGroups size="1.3rem" />
						<p className="ml-1">100</p>
					</div>
					
					<img className="w-full" src={item.image} alt="Mountain" />
					<div className=" inline-flex justify-start px-3 py-2">
						<img
							className="w-10 h-10  rounded-full ring-2 ring-gray-600 dark:ring-gray-500 m-auto mr-2"
							src={item.profile}
							alt="Bordered avatar"
						></img>
						<div className="">
							<div className="font-bold text-xl mb-2">
								Creators Name
							</div>
							<p className="text-gray-700 text-base">
								Lorem ipsum dolor sit amet
							</p>
						</div>
					</div>
				</div>
			))}
		</>
  );
}

export default Creator
