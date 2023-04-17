import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, deleteFromBasket, increase } from "../../redux";
import css from './CounterButton.module.css'


const CounterButton = ({ id }) => {

	let data = useSelector((state) => state.basket.data);
  const amount = data.find((el) => el.id === id).amount
	const totalAmount = data.reduce((sum, crr) => (sum += crr.amount),1);
  const dispatch = useDispatch()

	const increaseHandle = () => {
		if (totalAmount < 101) {
      console.log(totalAmount);
			dispatch(increase(id));
		}
	};
	const decreaseHandle = () => {
    if(amount === 1) {
      dispatch(deleteFromBasket(id))
    }else{
      dispatch(decrease(id))
    }
  };
	return (
		<div className={css.wrapper}>
			<button className={css.button} type="decrease" onClick={decreaseHandle}>
				<svg width="10" height="10" viewBox="0 0 10 10" className="icon">
					<rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect>
				</svg>
			</button>
			<p>{amount}</p>
			<button className={css.button} type="increase" onClick={increaseHandle}>
				<svg width="10" height="10" viewBox="0 0 10 10" className="icon">
					<g fill="#454B54">
						<rect x="4" width="2" height="10" ry="1"></rect>
						<rect y="4" width="10" height="2" rx="1"></rect>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default CounterButton;
