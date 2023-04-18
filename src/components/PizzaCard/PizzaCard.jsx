import Button from "../button/Button";
import css from "./PizzaCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux";
import { fetchDeletePizza } from "../../redux/PizzaSlice";

function PizzaCard({ id, name, img, description, price, isAdmin }) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		const res = window.confirm("Вы действительно хотите удалить " + name + "?");
		if (res) {
			dispatch(fetchDeletePizza(id));
		}
	};

	const handelAddToBasket = () => {
		dispatch(addToBasket({ id, name, img, description, price, amount: 1 }));
	};

	return (
		<div className={css.wrapper}>
			<div className={css.imageWrapper}>
				<img src={img} alt={name} />
			</div>
			<div className={css.name}>{name}</div>
			<p className={css.description}>{description}</p>
			<div className={css.footer}>
				<div className={css.price}>от {price} сом</div>
				{isAdmin ? (
					<Button title={"Удалить"} onClick={handleDelete} />
				) : (
					<Button
						title={"В корзину"}
						variant={"forAdd"}
						onClick={handelAddToBasket}
					/>
				)}
			</div>
		</div>
	);
}

export default PizzaCard;
