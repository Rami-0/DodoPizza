import React, { useState } from "react";
import Button from "./../../components/button/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const submit = (e) => {
		e.preventDefault();

    if(login ==="admin" && password ==="admin"){
      navigate('/admin')
    }
    else{
      alert("логин или пароль неверный")
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
