import { AiOutlinePlus } from 'react-icons/ai';
import Creator from '../components/cards/Creator';
import { creatorData } from '../components/cards/creatorData';
import { useContext, useState } from 'react';
import EditProfile from '../components/modals/EditProfile';
import ChooseSpace from '../components/modals/ChooseSpace';
import Space from '../components/modals/Space';
import Carousel from '../components/corousel/Carousel';
import { appContext } from '../App';
import Loading from '../components/modals/Loading';
import Modal from '../components/modals/Modal';
import Content1 from '../components/modals/Content1';
import Content2 from '../components/modals/Content2';

export default function Home() {
	const [modalContent, setModalContent] = useState(() => (
		<h1>content not available</h1>
	));
	const {
		showEditProfileModal,
		setShowEditProfileModal,
		showChooseSpaceModal,
		setShowChooseSpaceModal,
		showCreateSpaceModal,
		setShowCreateSpaceModal,
		showLoadingModal,
		setShowLoadingModal,
		showModal,
		setShowModal,
	} = useContext(appContext);
	const handleModal = (content) => {
		setShowModal(true)
		setModalContent(content)
	}
	return (
		<>
			<div className="w-screen flex justify-center">
				<Carousel />
			</div>
			{/* <div className="relative bg-hero-pattern bg-cover  bg-no-repeat ">
				<div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
				<Navbar
					setShowEditProfileModal={setShowEditProfileModal}
					setShowModal={setShowCreateSpaceModal}
					showModal={showCreateSpaceModal}
				/> 
			
				<main>
					<section className="relative ">
						<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
							<div className="max-w-xl text-center sm:text-left text-white">
								<div className="inline-flex rounded-xl bg-red-600 px-4 py-1.5 mb-5 text-md font-medium text-white   sm:w-auto">
									<MdGroups size="1.5rem" className="mr-2" />
									Live Now
								</div>

								<h1 className="text-4xl font-bold sm:text-7xl ">
									Space Name
								</h1>

								<p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Nesciunt illo tenetur fuga
									ducimus numquam ea!
								</p>

								<div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-center">
									<a
										href="/explore"
										className=" bg-gray-900 bg-opacity-50  drop-shadow-lg  text-white font-medium border-2 border-gray-700  rounded-full   py-1 px-12   items-center"
									>
										Explore Now
									</a>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div> */}
			<section>
				<div className="w-full mx-4 md:mx-auto text-center md:w-8/12 xl:w-6/12 md:text-center my-10 ">
					<h1 className="mb-8 mt-4 text-3xl font-bold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
						<span>Welcome to </span>{' '}
						<span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-yellow-500 lg:inline">
							Meta
						</span>
						<span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-cyan-600 lg:inline">
							SoftSkills
						</span>
					</h1>
					<p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
						Explore the available conference and workshop
					</p>
				</div>
				<div className="w-full mx-4 md:mx-auto text-center md:w-8/12 xl:w-10/12 md:text-start  mb-8">
					<div className=" flex  justify-between ">
						<div className=" flex  justify-between gap-4">
							<button
								className=" w-full rounded px-4 py-1 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto block items-center border-2 border-cyan-200  "
								href="/about"
							>
								Open World
							</button>
							<button
								className=" w-full rounded px-4 py-1 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto block items-center border-2 border-cyan-200  "
								href="/about"
							>
								Public Room
							</button>
						</div>

						<div className=" flex  justify-between ">
							<button
								className=" w-full rounded px-4 py-1 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto inline-flex items-center border-2 border-cyan-200  "
								onClick={() => setShowChooseSpaceModal(true)}
							>
								<AiOutlinePlus className="w-6 h-6 mr-2 text-yellow-500" />
								Join a private room
							</button>
							{showEditProfileModal && (
								<EditProfile
									setShowModal={setShowEditProfileModal}
									showModal={showEditProfileModal}
								/>
							)}
							{showChooseSpaceModal && (
								<ChooseSpace
									setShowModal={setShowChooseSpaceModal}
									showModal={showChooseSpaceModal}
								/>
							)}
							{showCreateSpaceModal && (
								<Space
									setShowModal={setShowCreateSpaceModal}
									showModal={showCreateSpaceModal}
								/>
							)}
							{showLoadingModal && (
								<Loading
									setShowModal={setShowLoadingModal}
									showModal={showLoadingModal}
									Private={true}
									// space={true}
								/>
							)}
							{showModal && (
								<Modal
									setShowModal={setShowModal}
									showModal={showModal}
									content={modalContent}
								/>
							)}
						</div>
					</div>
					{/* cards for creators */}
					<div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-10">
						{/* card 1 */}
						<Creator data={creatorData} />
					</div>
					<div>
						<button
							className=" w-full rounded px-4 py-1 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto inline-flex items-center border-2 border-cyan-200  "
							onClick={() => setShowLoadingModal(true)}
						>
							<AiOutlinePlus className="w-6 h-6 mr-2 text-yellow-500" />
							Loading
						</button>
						<button
							className=" w-full rounded px-4 py-1 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto inline-flex items-center border-2 border-cyan-200  "
							onClick={() => setShowLoadingModal(true)}
						>
							<AiOutlinePlus className="w-6 h-6 mr-2 text-yellow-500" />
							Private code
						</button>
						<button
							className=" w-full rounded px-4 py-1 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto inline-flex items-center border-2 border-cyan-200  "
							onClick={() => handleModal(Content1)}
						>
							Content Modal 1
						</button>
						<button
							className=" w-full rounded px-4 py-1 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto inline-flex items-center border-2 border-cyan-200  "
							onClick={() => handleModal(Content2)}
						>
							Content Modal 2
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
