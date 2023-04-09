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
import LoginPage from "./pages/LoginPage/LoginPage";
import { useState, useEffect } from "react";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import Button from "./components/button/Button";
import ProtectedRoute from "./components/routes/ProtectedRoute";

const authLocal = JSON.parse(localStorage.getItem("auth"));

function App() {
	const [auth, setAuth] = useState(authLocal);
	useEffect(() => {
		localStorage.setItem("auth", auth);
	});

	return (
		<div className="App">
			<Header />
			Auth = {auth ? "true" : "false"}
			<Button title={"logout"} onClick={() => setAuth(false)}></Button>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contacts" element={<ContactPage />} />
				<Route path="/aboutus" element={<AboutUsPage />} />
				<Route element={<ProtectedRoute auth={auth} setAuth={setAuth} />}>
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/create-pizza" element={<CreatePizzaPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
