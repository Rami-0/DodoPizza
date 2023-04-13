import React from "react";
import { useSelector } from "react-redux";
import css from "../Modal.module.css"

const ModalHeader = () => {
	const arr = useSelector((state) => state.basket.data);
	const total = Object.keys(arr).reduce(
		(acc, crr) => [acc[0] + 1, acc[1] + arr[crr].price],
		[0, 0]
	);
	return (
		<section style={{padding: 0 + "px " + 16 + "px", flex: 0 + " 0" +  " auto"}}>
			{total[0] == 1 ? (
				<h1 className={css.header}>
					{total[0]} товар на {total[1]} сом
				</h1>
			) : total[0] < 5 ? (
				<h1 className={css.header}>
					{total[0]} товара на {total[1]} сом
				</h1>
			) : (
				<h1 className={css.header}>
					{total[0]} товаров на {total[1]} сом
				</h1>
			)}
		</section>
	);
};

export default ModalHeader;
