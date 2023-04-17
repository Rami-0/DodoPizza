import React from "react";
import { useSelector } from "react-redux";
import css from "../Modal.module.css";

const ModalHeader = () => {
	const arr = useSelector((state) => state.basket.data);
	const total = Object.keys(arr).reduce(
		(acc, crr) => [acc[0] + 1, acc[1] + arr[crr].price],
		[0, 0]
	);

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
				{total[0]} {A} на {total[1]} сом
			</h1>
		</section>
	);
};

export default ModalHeader;
