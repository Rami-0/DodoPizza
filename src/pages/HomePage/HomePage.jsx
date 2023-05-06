import Slider from "./../../components/slider/Slider";
import css from "./HomePage.module.css";
import PizzaCard from "./../../components/PizzaCard/PizzaCard";
import LoadingBar from "react-top-loading-bar";
import OftenOrdered from "./../../components/oftenOrderd/OftenOrdered";
import { useSelector } from "react-redux";

const HomePage = () => {
	const {pizzaData: pizzas, progress, error} = useSelector((state) => state.Pizza); 

	if (error) return <h1>chto to ni tak</h1>
	return (
		<div>
			<LoadingBar
				color="rgb(255, 105, 0)"
				progress={progress}
				onLoaderFinished={() => {}}
			/>

			<Slider />
			<OftenOrdered />
			<section className="container">
				<div className="title" id="Pizzas">Пицца</div>
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
