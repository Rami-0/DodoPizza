import React from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import AnchorLink from "./../anchorLink/AnchorLink";
import { Link } from "react-router-dom";
import Button from "./../button/Button";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "../../redux";

const Header = () => {
	const [isModal, setModal] = useState(false);

	const num = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	const handelMinus = () => {
		dispatch(decremented());
	};
	const handelPluse = () => {
		dispatch(incremented());
	};
	useEffect(() => {
		if (isModal) {
			document.body.style.height = "100vh";
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.height = "auto";
			document.body.style.overflow = "visible";
		}
	}, [isModal]);

	return (
		<div className={css.wrapper + " container"}>
			<header className={css.header}>
				<div className={css.left}>
					<Link to="/">
						<img height={45} src={logo} alt="Logo Dodo pizza" />
					</Link>
					{/* <button onClick={handelMinus}>minus</button>
					{num}
					<button onClick={handelPluse}>pluse</button> */}
					<div>
						<h4>Доставка пиццы Бишкек</h4>
						<p>33 мин . 4.7</p>
					</div>
					<div>
						<h4>0 (551) 550-550</h4>
						<p>Звонок по телефону</p>
					</div>
				</div>
				<div>
					<div className={css.right}>
						<div>
							<svg fill="none" viewBox="0 0 24 24">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.05-.1a1 1 0 01-.44-.45C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.1-1.05a1 1 0 01.45-.44C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z"
									fill="#000"></path>
							</svg>
							<p>Додокоины</p>
						</div>
						<Button title={"Войти"} />
					</div>
				</div>
			</header>

			<nav className={css.nav}>
				<div className={css.linksWrapper}>
					<Link className={css.anchorLinks} to="/">
						Пицца
					</Link>
					<AnchorLink id="Комбо" />
					<AnchorLink id="Закуски" />
					<AnchorLink id="Десерты" />
					<Link className={css.anchorLinks} to="/drinks">
						Напитки
					</Link>
					<AnchorLink id="Другие товары" />
					<AnchorLink id="Акции" />
					<Link className={css.anchorLinks} to="/contacts">
						Контакты
					</Link>
					<Link className={css.anchorLinks} to="/aboutus">
						О нас
					</Link>
				</div>
				<Button title={"Корзина"} onClick={() => setModal(!isModal)} />
				{isModal ? (
					<Modal isModal={isModal} setModal={setModal} />
				) : null}
			</nav>
			{/* <Button title={"В корзину"} variant={"secondary"}/>
        <Button title={"Корзина"} variant={"disapled"}/> */}
		</div>
	);
};

export default Header;
