import css from "./Header.module.css";
import AnchorLink from "../anchorLink/AnchorLink";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRef } from "react";

const Nav = () => {
	const [isModal, setModal] = useState(false);

	useEffect(() => {
		if (isModal) {
			document.body.style.height = "100vh";
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.height = "auto";
			document.body.style.overflow = "visible";
		}
	}, [isModal]);

	const tagRef = useRef(null);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		//logic
	}, [tagRef]);

	return (
		<div ref={tagRef} className={`${css.wrapper} ${isSticky ? css.show : ""}`}>
			<nav className={css.nav}>
				<div className={css.linksWrapper}>
					<ul className={css.showTransform}>
						<span className={css.icon }>
							<svg
								id="logo_svg__Layer_1"
								width={36}
								height={36}
								x="0"
								y="0"
								viewBox="0 0 70 70">
								<path
									d="M32.6 3c18.6 0 32.9 12.8 32.9 31.8C65.5 53.9 51.2 67 32.6 67H11.7C7.5 67 4 64.2 4 59.3V11c0-4.9 3.5-8 7.7-8h20.9z"
									fill="#ff6900"></path>
								<path
									fill="#000"
									d="M54 27.9c-.1.8-1 .8-1.4.1-1.3-2.2-3-2.6-5.7-2.8-2-.1-4.4.1-6.6.1-.4 0-.5-.3-.5-.4.4-1.9 2-5.4 3.7-5.7.8-.1 2.6-.3 3.6-.3 4.6 0 7.1 5.3 6.9 9M28 46c2.9.8 7 1.3 10.4 1 5.9-.4 10.4-2.6 12.9-4.2-1.5 3.8-7.2 6.2-12.6 6.8 0 .3-.1.5-.1.8 4.1-.2 8-1.6 9.8-2.8-1 3.7-6 5.2-10.6 5.5-.1.3-.3.6-.4.8 2.7 0 5.2-.4 6.7-.9-2.1 3.9-11.1 6.6-18.7 3 1.7-3.4 2.5-6.8 2.6-10m25.1-26.6c-1.8-1.7-4.2-2.5-6.3-2.4-3 0-5.5.8-9.2.9-2.5.1-4.8-5.4-7.8-6.1-1.3-2.9-4.3-3.3-6.1-1.8-1.7-1-4.3-.5-4.4 1.4-1.9-.6-4.4.4-3.3 3-4.7.1-5.5 4.3-2.4 4.7-4.1 2.3-2.2 6.3 1.2 5.5.6 6 3.3 13.8-1.1 15.7-.5.2-2.5.7-6.3-.2-1.1-.3-2.3-.6-3.4-.9v3.1c3.3.8 6.6 1.4 8.7 1.2 5.8-.6 6.1-5.4 5.8-9.6-.3-4.1-1.7-8.9-1.2-12.3l-.2-.2c-2.1 2.2-3.5 1.6-3.7.9-.3-1.4 2.2-3.2 3.6-3.8 0-.1.1-.2.1-.3-1.3.2-2.9 0-3-.9-.1-1.1 2.2-2.2 5.2-1.9.1 0 .1-.1.2-.1l-.6-.3c-.8-.4-1-1.1-.7-1.5.3-.5 1.1-.7 1.8-.7 1.1 0 2 .3 2.7.6.1 0 .1-.1.2-.1-.2-.2-.5-.4-.6-.6-.2-.3-.2-.8.1-1 .4-.3 1.5-.4 2.4.4l.5.5c.1 0 .2 0 .3-.1-.2-.2-.3-.5-.3-.7-.1-.3 0-.7.4-.8s.9.1 1.2.5.5 1 .6 1.3c-2.1.2-4.6 1-6.1 3.1-1.5 2-2.1 5.2-1.2 8.2.6 3.1 1.8 6 2.9 9v.1c2.4 6.9 7 23.9-15.3 32.9.8.5 2.4.9 3.7.9h2.3c4.6-2.4 7.7-5.3 9.9-8.2 10.2 4.5 19.5 2.2 23.5-5.2 2.7-1.6 4.4-4.9 4.5-7.2 1.7-2.1 2-4.7 1.5-6.5-.1-.4-.5-.4-1.1-.1-8.3 5-15.6 5.8-24.3 3.2-.2-3.4-.9-6.3-1.2-8.1-.2-3.5.9-5.2 7.3-3.1 4.2 1.1 6.1 3 7.6 4 .7.5 1.6 1.1 2.1.7.3-.2.4-.8.4-1.5-.1-1.9-1-5.1-1.8-6.3 2.5-.1 4.6-.1 5.7 0 2.4.4 2.6 1.7 2.9 2.2.7 2 4.6 1.5 4.9-.2.6-3.5.8-8.1-2.6-11.3m-44.4 30c-1.6-.1-3.2-.1-4.7 0v2.1c2.7-.6 4.4-.9 4.4-.9l.3-1.2z"></path>
								<path
									class="Nav_logo_svg__st1__McAmC"
									fill="#fff"
									d="M33.7 27.5c-3.5-.8-7.4-1.8-9.4-4.8 0-.1-.1-.1-.2-.1s-.1.1-.1.1c0 .2 0 .3.1.5l-.3.1c-.5-.8-.7-1.7-.1-2.4.8-1 2.3-.9 3.3-.3l-.1.3c-.5-.1-1-.1-1.4.1-.3.2-.4.5-.2.8C27 25 32 25.7 37.9 25.2c.6 0 .7-.3.8-.6.5-2 1.4-3.9 2.8-5.3-1.1.2-2.1.2-2.9.2-3 .2-4.8-.2-5.3-.6l.1-.3c.3.1.7.1.7 0 .1-.1 0-.2-.1-.3-.6-.5-3.2-3.2-3.2-3.2-.3-2.3-3.6-2.3-4.9-.1l-.4-.1c.1-.5.3-.9.5-1.2-2.7.6-4.3 3.1-4.6 5.4-1.2 10.2 14.3 7.8 18.7 11.9.1.1.3.4.4.2.2-.2-1.8-2.6-6.8-3.7m-5.4-12.2c.7-.2 1.8.5 2.3 1.6.6 1.1.4 2.2-.3 2.5s-1.8-.5-2.3-1.6c-.1-.2-.1-.3-.2-.5h.1c.2.2.5.3.7.2.3-.2.2-.6 0-1-.2-.3-.5-.6-.8-.6l-.1-.1c.2-.3.4-.4.6-.5M51.3 42.8c-2.5 1.6-7 3.8-12.9 4.2-3.4.2-7.4-.2-10.4-1 0 1-.1 2-.3 3 1.7.4 4.6 1 8.9 1.1-.2 1.1-1.4 5.1-4.3 7.6 5.4.2 10.3-1.9 11.8-4.7-1.5.5-4.1 1-6.7.9.1-.3.3-.5.4-.8 4.6-.2 9.6-1.7 10.6-5.5-1.8 1.2-5.7 2.6-9.8 2.8 0-.3.1-.5.1-.8 5.4-.7 11.1-3 12.6-6.8"></path>
							</svg>
						</span>
						<li>
							<Link className={css.anchorLinks} to="/">
								Пицца
							</Link>
						</li>
						<li>
							<AnchorLink id="Комбо" />
						</li>
						<li>
							<AnchorLink id="Закуски" />
						</li>
						<li>
							<AnchorLink id="Десерты" />
						</li>
						<li>
							<Link className={css.anchorLinks} to="/drinks">
								Напитки
							</Link>
						</li>
						<li>
							<AnchorLink id="Другие товары" />
						</li>
						<li>
							<AnchorLink id="Акции" />
						</li>
						<li>
							<Link className={css.anchorLinks} to="/contacts">
								Контакты
							</Link>
						</li>
						<li>
							<Link className={css.anchorLinks} to="/aboutus">
								О нас
							</Link>
						</li>
					</ul>
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
export default Nav;
