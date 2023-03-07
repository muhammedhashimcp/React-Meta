import { Disclosure } from '@headlessui/react';

import Logo from '../../images/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import profile from '../../images/profile.png';
import { AiOutlinePlus } from 'react-icons/ai';
import ChooseSpace from '../modals/ChooseSpace';
const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Contact Us', href: '/contact-us', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = ({ setShowModal, setShowEditProfileModal }) => {
	return (
		<>
			<Disclosure as="nav" className=" sticky top-5 z-50">
				{({ open }) => (
					<section>
						<div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 font-display">
							<div className="flex justify-between h-16">
								<div className="flex">
									<div className="-ml-2 mr-2 flex items-center md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
											<span className="sr-only">
												Open main menu
											</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
									<div className="flex-shrink-0 flex items-center text-white text-2xl font-semibold">
										{/* Logo */}
										{/* <img src={Logo} alt="Logo" className="w-40 h-20"/> */}
										<h1 className="text-xl font-display ">
											MetaSoftskills
										</h1>
									</div>
								</div>
								<div className="flex items-center">
									<div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
										{/*For other navigation buttons */}
										{/* {navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className={classNames(
													item.current
														? ' text-cyan-800 font-semibold hover:bg-black hover:bg-opacity-5 hover:text-sky-900'
														: 'text-cyan-800 hover:bg-black hover:bg-opacity-5 hover:text-sky-900 font-semibold',
													'px-3 py-2 rounded-md text-base font-medium'
												)}
												aria-current={
													item.current
														? 'page'
														: undefined
												}
											>
												{item.name}
											</Link>
										))} */}
										<img
											className="w-10 h-10  rounded-full ring-2 ring-gray-600 dark:ring-gray-500"
											src={profile}
											alt="Bordered avatar"
											onClick={() =>
												setShowEditProfileModal(true)
											}
										></img>
										<button
											onClick={() => setShowModal(true)}
											className="bg-gray-900  drop-shadow-lg  text-white  border-2 border-gray-700  rounded-xl   py-1 px-4  inline-flex items-center"
										>
											<AiOutlinePlus className="w-6 h-6 mr-2 text-yellow-500" />
											<span>Create Space</span>
										</button>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? 'text-white font-semibold hover:bg-black hover:bg-opacity-50 hover:text-slate-300'
												: 'text-cyan-400 font-semibold hover:bg-slate-200 hover:bg-opacity-50 hover:text-white',
											'block px-3 py-2 rounded-md text-base font-semibold'
										)}
										aria-current={
											item.current ? 'page' : undefined
										}
									>
										{item.name}
									</a>
								))}
								<button className="block px-3 py-2 rounded-md text-base font-semibold text-cyan-400  hover:bg-slate-200 hover:bg-opacity-50 hover:text-white">
									Create Space
								</button>
							</div>
						</Disclosure.Panel>
					</section>
				)}
			</Disclosure>
		</>
	);
};

export default Navbar;
