import { useState, useEffect } from "react";
import Slider from "./../../components/slider/Slider";
import css from "./HomePage.module.css";
import PizzaCard from "./../../components/PizzaCard/PizzaCard";
import LoadingBar from "react-top-loading-bar";
import OftenOrdered from "./../../components/oftenOrderd/OftenOrdered";
import { getPizzas } from "../../components/api/Api";

const HomePage = () => {
	const [pizzas, setPizzas] = useState([]);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setProgress(30);
		setTimeout(() => {
			setProgress(60);
		}, 350);

		// axios
		// 	.get(base_url + "pizza")
		getPizzas()
			.then((res) => setPizzas(res.data))
			.finally(() => {
				setProgress(100);
			});

		// fetch(base_url + "pizza")
		// 	.then((res) => res.json())
		// 	.then((data) => setPizzas(data))
		// 	.finally(() => {
		// 		setProgress(100);
		// 	});
	}, []);

	return (
		<div>
			<LoadingBar
				color="rgb(255, 105, 0)"
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>

			<Slider />
			<OftenOrdered />
			<br />
			<br />
			<br />
			<br />

			<section className="container">
				<div className="title">Пицца</div>
				<div className={"pizzasWrapper"}>
					{pizzas.map((item) => (
						<PizzaCard key={item.id} {...item} />
					))}
				</div>
			</section>
		</div>
	);
};

export default HomePage;
