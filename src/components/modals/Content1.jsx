import React from 'react'

const Content1 = () => {
  return (
		<div>
			
				<div className="flex justify-center m-5">
					<h1 className=" text-[#0088C3] text-4xl font-bold mx-auto ">
					Content 1
					</h1>
				</div>
		
			<div className="flex justify-center mx-auto">
			
					<form className="w-2/3 p-2" action="#">
						<div className="w-full ">
							{/* <label
														for="userName"
														className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														User Name
													</label> */}
							<input
								type="userName"
								name="userName"
								id="userName"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
			
					{/* <img src={LoadingImage} alt="" /> */}
				
			</div>
			
				<div className="flex justify-center m-5">
					<h1 className=" text-[#0088C3] text-4xl font-bold mx-auto ">
						Creating your space
					</h1>
				</div>
			
		</div>
  );
}

export default Content1
