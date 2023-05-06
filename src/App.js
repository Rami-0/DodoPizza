import "./App.css";
import Header from "./components/header/Header.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import CreatePizzaPage from "./pages/CreatePizzaPage/CreatePizzaPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useState, useEffect } from "react";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/PizzaSlice";
import Modal from './components/modal/Modal';

function App() {




	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchPizzas());
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contacts" element={<ContactPage />} />
				<Route path="/aboutus" element={<AboutUsPage />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/create-pizza" element={<CreatePizzaPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
