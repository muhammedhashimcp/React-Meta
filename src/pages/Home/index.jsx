import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import banner from '../../images/banner.jpg';
import Logo from '../../images/logo.png';
const index = () => {
	return (
		<>
			<div className="h-screen md:flex">
				<div className="top-10 absolute  ">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-display ">
						<div className="flex justify-between h-16   ">
							<div className="flex">
								<div className="flex-shrink-0 flex items-center text-white text-2xl font-semibold">
									{/* Logo */}
									<img
										src={Logo}
										alt="Logo"
										className="w-40 h-20"
									/>
								</div>
							</div>
							<div className="flex items-center">
								<div className=" md:ml-6 md:flex md:items-center md:space-x-4">
									<button class="bg-grey-700 bg-opacity-30 backdrop-blur-lg  drop-shadow-lg font-bold text-white border-2 border-slate-600 rounded-lg   py-2 px-4  inline-flex items-center">
										<svg
											class="fill-current w-4 h-4 mr-2"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
										</svg>
										<span>create space</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:flex w-full justify-around items-center">
					<div className="w-full">
						<img
							className="w-full "
							src={banner}
							alt="meta-soft-skills-banner"
						/>
					</div>

					<div className="lg:absolute flex flex-col justify-start w-full px-10  mt-4 lg:mt-1">
						<h1 className="text-black font-bold text-3xl lg:text-6xl font-display lg:text-white ">
							Space Name
						</h1>
						<p className="lg:text-white text-black mt-1">
							progressively aggregate 24/7 niche markets through
							excellent processes. Intrinsicly drive adaptive core
							competencies vis-a-vis accurate
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
