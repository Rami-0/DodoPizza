import PizzaCard from "./../../components/PizzaCard/PizzaCard";
import LoadingBar from "react-top-loading-bar";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { setAuth } from "../../redux";
import { useDispatch, useSelector } from "react-redux";


function AdminPage() {
	const dispatch = useDispatch();

	const {pizzaData: pizzas, progress, error} = useSelector((state) => state.Pizza); 

	if (error) return <h1>chto to ni tak</h1>

	return (
		<div>
			<LoadingBar
				color="#000"
				progress={progress}
				onLoaderFinished={() => {}}
			/>
			<section className="container">
				<Link to="/create-pizza">
					<Button title="+ Добавить пиццу" />
				</Link>
				<Button title={"logout"} onClick={() => dispatch(setAuth(false))}></Button>
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
