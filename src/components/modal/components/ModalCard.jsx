import React from "react";
import css from "../Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromBasket } from "../../../redux";

const ModalCard = ({ elem }) => {
	const { img, name, description, price, id } = elem;
	const amount = useSelector(
		(state) =>
			state.basket.data[state.basket.data.findIndex((item) => item.id === id)]
				.amount
	);
	const dispatch = useDispatch();

	const deleteAll = () => {
			dispatch(deleteFromBasket(id));
	};

	return (
		<div className={css.card}>
			<div className={css.cardTop}>
				<div>
					<div>
						<img src={img} alt="" />
					</div>
					<div>
						<h1>{name}</h1>
						<p>{description}</p>
					</div>
				</div>
				<button className={css.deleteButton} onClick={deleteAll}>
					<svg fill="none" viewBox="0 0 24 24">
						<path
							d="M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z"
							fill="#000"></path>
					</svg>
				</button>
			</div>

			<hr className={css.betweenTopBottomLine} />

			<div className={css.cardBottom}>
				<p>{price} сом</p>

				{/* <CountButton variant='small' amount={elem.amount} id={elem.id} deleteAll={deleteAll} /> */}
			</div>
		</div>
	);
};

export default ModalCard;
