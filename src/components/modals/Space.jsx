import React from 'react';
import profile from '../../images/profile.png';
import creater1 from '../../images/creater-1.png';

export default function Space({ setShowModal, showModal }) {
	return (
		<>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl px-10">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
								{/*header*/}
								<div className="flex items-start justify-between p-5 ">
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
									<div className="flex justify-center m-5">
										<h1 className=" text-[#1D5B82] text-3xl font-bold mx-auto whitespace-nowrap ">
											How do you want your space be like,
											tell us
										</h1>
									</div>
									<div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:mx-10">
										{/* column 1 */}
										<div class="rounded overflow-hidden  my-auto">
											<img
												className="w-full "
												src={creater1}
												alt="creater"
											/>
											<div class=" inline-flex justify-start px-3 py-2">
												<img
													className="w-10 h-10  rounded-full ring-2 ring-gray-600 dark:ring-gray-500 m-auto mr-2"
													src={profile}
													alt="Bordered avatar"
												></img>
												<div class="">
													<div class="font-bold text-xl mb-2">
														Creators Name
													</div>
													<p class="text-gray-700 text-base">
														Lorem ipsum dolor sit
														amet
													</p>
												</div>
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
														Select Room Type
													</label>
													<div>
														<div class="flex flex-nowrap justify-center gap-4">
															<button class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
																Private
															</button>
															<button class="bg-[#FFF7ED] border-2 border-[#ffdfb7] text-[#D7AA2A] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
																Public
															</button>
														</div>
													</div>
												</div>
												<div class="flex flex-nowrap justify-start gap-4">
													<div className="w-2/3">
														<label
															for="title"
															class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
														>
															Enter the Title
														</label>
														<input
															type="title"
															name="title"
															id="title"
															class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
															placeholder="title"
															required
														/>
													</div>
												</div>
												<div>
													<label
														for="description"
														class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														Enter The Desciption
													</label>
													<textarea
														type="description"
														name="description"
														id="description"
														placeholder="Lorem ipsum"
														class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														required
													/>
												</div>

												<button
													className=" w-full rounded-lg px-5 py-1 text-md       font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto block items-center border-2 border-cyan-300 bg-cyan-100 "
													type="submit"
												>
													Create
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
