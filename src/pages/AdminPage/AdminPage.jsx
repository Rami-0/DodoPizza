import { useState } from "react";
import { useEffect } from "react";
import PizzaCard from "./../../components/PizzaCard/PizzaCard";
import { base_url } from "../../constants/api_const";
import LoadingBar from "react-top-loading-bar";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminPage({ setAuth }) {
	const [pizzas, setPizzas] = useState([]);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setProgress(30);
		setTimeout(() => {
			setProgress(60);
		}, 350);

		axios
			.get(base_url + "pizza")
			.then((res) => setPizzas(res.data))
			.finally(() => {
				setProgress(100);
			});

		// fetch(base_url + "pizza")
		//   .then((res) => res.json())
		//   .then((data) => setPizzas(data))
		//   .finally(() => {
		//     setProgress(100);
		//   });
	}, []);

	return (
		<div>
			<LoadingBar
				color="#f11946"
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<section className="container">
				<Link to="/create-pizza">
					<Button title="+ Добавить пиццу" />
				</Link>
        <Button title={"logout"} onClick={() => setAuth(false)}></Button>
				<div className="title">Пицца</div>
				<div className={"pizzasWrapper"}>
					{pizzas.map((item) => (
						<PizzaCard key={item.id} {...item} isAdmin={true} />
					))}
				</div>
			</section>
		</div>
	);
}

export default AdminPage;
