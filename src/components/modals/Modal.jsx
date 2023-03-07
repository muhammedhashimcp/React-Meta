import React from 'react';

export default function Modal({ setShowModal, showModal, content }) {
	return (
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
					{content}
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
}
