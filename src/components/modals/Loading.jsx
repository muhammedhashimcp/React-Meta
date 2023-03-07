import React from 'react';
import LoadingImage from '../../images/Loading.png';

export default function Loading({ setShowModal, showModal,Private,space }) {
	return (
		<>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:p-10">
						<div className="relative w-full my-6 mx-auto max-w-3xl md:mx-20">
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
									{Private && (
										<div className="flex justify-center m-5">
											<h1 className=" text-[#0088C3] text-4xl font-bold mx-auto ">
												Enter the private room code
											</h1>
										</div>
									)}
									<div className="flex justify-center mx-auto">
										{Private ? (
											<form class="w-2/3 p-2" action="#">
												<div className="w-full ">
													{/* <label
														for="userName"
														class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														User Name
													</label> */}
													<input
														type="userName"
														name="userName"
														id="userName"
														class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														placeholder="user name"
														required
													/>
												</div>

												<button
													className=" w-full rounded-lg px-10 py-2 mt-4 text-md       font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto block items-center mx-auto border-2 border-cyan-300 bg-cyan-100 "
													type="submit"
												>
													Join the room
												</button>
											</form>
										) : (
											<img src={LoadingImage} alt="" />
										)}
									</div>
									{!Private && (
										<div className="flex justify-center m-5">
											<h1 className=" text-[#0088C3] text-4xl font-bold mx-auto ">
												{space
													? 'Creating your space'
													: 'Saving changes'}
											</h1>
										</div>
									)}
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
