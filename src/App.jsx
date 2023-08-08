import CompanyUserDetails from './components/CompanyUserDetails/CompanyUserDetails';
import RootComponent from './components/rootComponent/RootComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<RootComponent />} />
					<Route path="/details/:id" element={<CompanyUserDetails />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
