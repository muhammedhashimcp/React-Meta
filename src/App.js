import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './pages/Home';
export let appContext = createContext(); 
function App() {
		const [showEditProfileModal, setShowEditProfileModal] = useState(false);
		const [showChooseSpaceModal, setShowChooseSpaceModal] = useState(false);
		const [showCreateSpaceModal, setShowCreateSpaceModal] = useState(false);
		const [showLoadingModal, setShowLoadingModal] = useState(false);
		const [showModal, setShowModal] = useState(false);
	return (
		<appContext.Provider
			value={{
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
			}}
		>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</appContext.Provider>
	);
}

export default App;
