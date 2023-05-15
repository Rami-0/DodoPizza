import React from "react";
import css from "../Modal.module.css";
import Button from "./../../button/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ModalResualt = ({ amount }) => {
	const navigate = useNavigate();

	const arr = useSelector((state) => state.basket.data);
	const total = Object.keys(arr).reduce((acc, crr) => {
		if (arr[crr].amount > 1) {
			return acc + arr[crr].price * arr[crr].amount;
		}
		return acc + arr[crr].price;
	}, 0);

	return (
		<div className={css.ModalResualt}>
			<div className={css.title}>
				<p>Сумма заказа</p>
				<p>{total}</p>
			</div>
			<Button
				amount={amount}
				title={"go to payment"}
				onClick={() => navigate("./payment")}
			/>
		</div>
	);
};

export default ModalResualt;
