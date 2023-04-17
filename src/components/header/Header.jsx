import React from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.svg";
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
			document.body.scroll = "no" 
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
						<div>
							<p>
								33 мин . 4.7{" "}
							</p>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									class="sc-1ohwd10-3 ecQPPY">
									<defs>
										<linearGradient id="star_16_svg__a">
											<stop offset="50%" stop-color="#FFD200"></stop>
											<stop
												offset="100%"
												stop-color="#999"
												stop-opacity="0.5"></stop>
										</linearGradient>
									</defs>
									<path
										fill="url(#star_16_svg__a)"
										d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path>
								</svg>
						</div>
					</div>
					<div>
						<h4>0 (551) 550-550</h4>
						<p>Звонок по телефону</p>
					</div>
				</div>
				<div>
					<div className={css.right}>
						<div>
							<svg width={28} height={28} fill="none" viewBox="0 0 24 24">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.05-.1a1 1 0 01-.44-.45C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.1-1.05a1 1 0 01.45-.44C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z"></path>
							</svg>
							<p>Додокоины</p>
						</div>
						<Button title={"Войти"} variant={"forLogin"} />
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
				<Button
					title={"Корзина"}
					amount={0}
					onClick={() => setModal(!isModal)}
					
				/>
				{isModal ? <Modal isModal={isModal} setModal={setModal} /> : null}
			</nav>
			{/* <Button title={"В корзину"} variant={"secondary"}/>
        <Button title={"Корзина"} variant={"disapled"}/> */}
		</div>
	);
};

export default Header;
