import React, { useState } from "react";
import Button from "./../../components/button/Button";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux";

const LoginPage = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const submit = (e) => {
		e.preventDefault();
		if (login === "admin" && password === "admin") {
			dispatch (setAuth(true)) ; 
		} else {
			alert("логин или пароль неверный");
		}
	};
	return (
		<div className="container">
			<h1>Логин</h1>
			<form onSubmit={submit}>
				<label>
					<div>логин</div>
					<input
						required
						type="text"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
						name=""
						id=""
					/>
				</label>
				<label>
					<div>пароль</div>
					<input
						required
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						name=""
						id=""
					/>
				</label>
				<br />
				<br />
				<Button title={"Enter"} />
			</form>
		</div>
	);
};

export default LoginPage;
