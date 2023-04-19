import React from "react";
import { useSelector } from "react-redux";
import css from "../Modal.module.css";

const ModalHeader = ({ totalAmount }) => {
	const arr = useSelector((state) => state.basket.data);
	const total = Object.keys(arr).reduce((acc, crr) => {
		if(arr[crr].amount > 1){
			return acc + arr[crr].price*arr[crr].amount
		}
		return acc + arr[crr].price;
	}, 0);

	const lastTwoDigits = total[0] % 100;
	const lastDigit = total[0] % 10;

	let A;

	switch (true) {
		case lastTwoDigits >= 11 && lastTwoDigits <= 19:
			A = "товаров";
			break;
		case lastDigit === 1:
			A = "товар";
			break;
		case lastDigit >= 2 && lastDigit <= 4:
			A = "товара";
			break;
		default:
			A = "товаров";
			break;
	}

	return (
		<section
			style={{ padding: 0 + "px " + 16 + "px", flex: 0 + " 0" + " auto" }}>
			<h1 className={css.header}>
				{totalAmount} {A} на {total} сом
			</h1>
		</section>
	);
};

export default ModalHeader;
