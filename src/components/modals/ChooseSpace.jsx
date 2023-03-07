import React from 'react';
import profile from '../../images/profile.png';
import creater1 from '../../images/creater-1.png';

export default function ChooseSpace({ setShowModal, showModal }) {

	return (
		<>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:p-10">
						<div className="relative w-auto my-6 mx-auto max-w-3xl ">
							{/*content*/}
							<div className="p-10 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
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
										<h1 className=" text-[#0088C3] text-4xl font-bold mx-auto ">
											Choose Your Space
										</h1>
									</div>
									<div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:px-10">
										{/* column 1 */}
										<div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700  mx-auto ">
											<div className="rounded overflow-hidden ">
												<img
													className="w-full rounded"
													src={creater1}
													alt="creater 1"
												/>
												<div className=" flex justify-center px-3 py-2">
													<h3 className="font-bold text-xl mb-2 text-[#444444]">
														Space 1 Name
													</h3>
												</div>
											</div>
										</div>
										{/* column 2 */}

										<div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700  mx-auto ">
											<div className="rounded overflow-hidden ">
												<img
													className="w-full rounded"
													src={creater1}
													alt="creater 1"
												/>
												<div className=" flex justify-center px-3 py-2">
													<h3 className="font-bold text-xl mb-2 text-[#444444]">
														Space 2 Name
													</h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
