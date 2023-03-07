import React from 'react';
import profile from '../../images/profile.png';
export default function EditProfile({ setShowModal, showModal }) {
	return (
		<> 
			{/* <button
				className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Open regular modal
			</button> */}
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl px-10">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
								{/*header*/}
								<div className="flex items-start justify-between p-5 ">
									<div class="mt-10 grid grid-cols-3 w-full">
										<div className="">
											<h1>MetaLogo</h1>
										</div>
										<div className="mx-auto">
											<h1 className="text-4xl font-bold text-blue-500">
												Edit Profile
											</h1>
										</div>
										<div className=""></div>
									</div>
									<button
										className="p-1 ml-auto bg-white border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
											X
										</span>
									</button>
								</div>
								{/*body*/}
								<div>
									<div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:mx-10">
										{/* column 1 */}
										<div class="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700  mx-auto ">
											<img
												className="rounded-t-lg mx-auto w-50 h-50"
												src={profile}
												alt="profile"
											/>

											<div class="p-5 ">
												
													<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
														Joseph Das
													</h5>
											
												<p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-auto">
													Here are the biggest
													enterprise technology
													acquisitions of 2021
												</p>
											</div>
										</div>
										{/* column 2 */}

										<div class="w-full max-w-sm py-4 bg-white  sm:p-6 md:py-8">
											<form class="space-y-6" action="#">
												<div>
													<label
														for="gender"
														class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														Select gender
													</label>
													<div>
														<div class="flex flex-nowrap justify-center gap-4">
															<button class="bg-[#FFF7ED] border-2 border-[#ffdfb7] text-[#D7AA2A] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
																Male
															</button>
															<button class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
																Female
															</button>
															<button class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
																Other
															</button>
														</div>
													</div>
												</div>
												<div class="flex flex-nowrap justify-center gap-4">
													<div className="w-2/3">
														<label
															for="userName"
															class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
														>
															User Name
														</label>
														<input
															type="userName"
															name="userName"
															id="userName"
															class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
															placeholder="user name"
															required
														/>
													</div>
													<div className="w-1/3">
														<label
															for="age"
															class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
														>
															Age
														</label>
														<input
															type="age"
															name="age"
															id="age"
															class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
															placeholder="xx"
															required
														/>
													</div>
												</div>
												<div>
													<label
														for="Bio"
														class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														Bio
													</label>
													<textarea
														type="Bio"
														name="Bio"
														id="Bio"
														placeholder="Lorem ipsum"
														class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														required
													/>
												</div>

												<button
													className=" w-full rounded-lg px-10 py-2 text-md       font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto block items-center border-2 border-cyan-300 bg-cyan-100 "
													type="submit"
												>
													Save
												</button>
											</form>
										</div>
									</div>
								</div>

								{/*footer*/}
								{/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Save Changes
									</button>
								</div> */}
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
