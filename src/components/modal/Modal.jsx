import React, { useEffect, useState } from "react";
import css from "./Modal.module.css";
import ModalHeader from "./components/ModalHeader";
import ModalCard from "./components/ModalCard";
import ModalResualt from "./components/ModalResualt";
import { useSelector } from "react-redux";

function Modal({ setModal, isModal }) {
	const [isOpened, Open] = useState(false);
	const open = () => setTimeout(() => Open(true), 1);
	const handleClose = () => {
		Open(false)
		setTimeout(() => {
			setModal(!isModal);
		}, 300);
	};

	useEffect(() => {
		open();
	},[]);
	const arr = useSelector((state) => state.basket.data);

	return (
		<div datatype={`${isOpened}`} onClick={handleClose} className={css.wrapper}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`${css.modal}`}
				datatype={`${isOpened}`}
				id={arr.length !== 0 ? "" : css.empty}>
				{arr.length !== 0 ? (
					<>
						<ModalHeader />
						<div>
							{arr?.map((elem) => {
								return <ModalCard key={elem.id} elem={elem} />;
							})}
						</div>
						<ModalResualt />

						<button
							className={`${css.closeButton} ${!isModal ? css.hideButton : ""}`}
							onClick={handleClose}>
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z"
									fill="#fff"></path>
							</svg>
						</button>
					</>
				) : (
					<>
						<img
							src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
							alt=""
						/>
						<h2>Ой, пусто!</h2>
						<p>
							Ваша корзина пуста, откройте «Меню» и выберите понравившийся
							товар. Мы доставим ваш заказ от 365 сом
						</p>

						<button
							className={`${css.closeButton} ${!isModal ? css.hideButton : ""}`}
							onClick={handleClose}>
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z"
									fill="#fff"></path>
							</svg>
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default Modal;
