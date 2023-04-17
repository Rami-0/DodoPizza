import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Footer.module.css";
import Button from "../button/Button";

function Footer() {
	const [Network, setNetwork] = useState(1);

	const changeNetwork = (e) => {
		setNetwork(e.target.id);
	};

	return (
		<div className={`${css.wrapper}`}>
			<div className={`${css.questionary}`}>
				<div>
					<svg
						x="0"
						y="0"
						width="50"
						height="50"
						viewBox="0 0 50 50"
						id="inline-svg-1"
						fill="white">
						<path
							d="M23.0757255,25.9598788 C32.9907119,25.9598788 44.4442307,23.7505274 45.469919,21.7621112 C46.4956072,19.7736949 32.7057985,17.1224732 32.7057985,17.1224732 C29.400803,18.6137854 23.0187428,18.6137854 23.0187428,18.6137854 C23.0187428,18.6137854 16.6366826,18.6137854 13.3316871,17.1224732 C13.3316871,17.1224732 -0.401138925,19.8289287 0.624549326,21.8173449 C1.70722026,23.7505274 12.8758257,25.9598788 23.0757255,25.9598788 L23.0757255,25.9598788 Z"
							id="inline-svg-177-6"></path>
						<path
							d="M31.6253877,13.3672513 C31.6253877,13.3672513 29.6879766,2.65189708 28.2634096,0.553013259 C26.8388426,-1.54587056 24.6735007,3.03853357 22.4511762,3.03853357 C20.2288516,3.03853357 19.7160075,0.111142981 17.7216137,0.000675411877 C15.6702372,-0.109792157 13.6758433,13.3672513 13.6758433,13.3672513 C13.6758433,13.3672513 24.1606566,15.6870703 31.6253877,13.3672513 L31.6253877,13.3672513 Z"
							id="inline-svg-177-6"></path>
						<path
							d="M13.1629992,27.0645545 C13.1629992,27.0645545 12.2512763,31.1518546 17.7216137,31.2623221 C17.7216137,31.2623221 19.8299729,31.2623221 20.9126438,29.4396072 C21.2545399,28.8872694 21.767384,28.5558667 22.4511762,28.5558667 L22.6791069,28.5558667 C23.3059164,28.5558667 23.8757432,28.8872694 24.2176393,29.4396072 C25.3003102,31.2623221 27.4086694,31.2623221 27.4086694,31.2623221 C32.8790067,31.1518546 31.9672838,27.0645545 31.9672838,27.0645545 C29.4600459,27.8930613 25.5282409,27.8378275 24.1606566,27.7825937 L24.1606566,27.7825937 L23.6478125,27.7825937 L23.6478125,27.7825937 L21.4824706,27.7825937 C21.5394533,27.7273599 16.240064,28.0035288 13.1629992,27.0645545 L13.1629992,27.0645545 Z"
							id="inline-svg-177-6"></path>
						<path
							d="M11.5105015,26.5674504 L7.29378312,25.9598788 L0,32.0355951 L0.683792167,32.0355951 C3.93180496,32.0355951 12.5361897,34.6868168 12.5361897,34.6868168 L7.97757529,38.4979479 C11.3965361,39.1607533 22.1662628,44.7393656 22.1662628,44.7393656 L23.191951,41.0939358 C14.5875662,34.9629857 11.5105015,26.5674504 11.5105015,26.5674504 L11.5105015,26.5674504 Z"
							id="inline-svg-177-6"></path>
						<path
							d="M48,31.9251275 L39.1676845,25.9598788 L34.438122,26.5674504 C34.7230354,28.0587626 33.7543298,30.7652181 33.7543298,30.7652181 C20.1354692,40.7625331 22.3577937,49.6551724 22.3577937,49.6551724 C27.7711484,39.2712209 39.6805286,37.8351425 39.6805286,37.8351425 L34.267174,35.3496222 C37.8001002,33.1955046 48,31.9251275 48,31.9251275 L48,31.9251275 Z"
							id="inline-svg-177-6"></path>
					</svg>
					<p>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</p>
				</div>

				<Button title="Заполнить анкету" variant={"fourth"} />
			</div>

			<div className={`${css.content}`}>
				<div className={css.links}>
					<div>
						<h4>Додо Пицца</h4>

						<Link to="/aboutus">О нас</Link>
						<a href="#">Додо-книга</a>
						<a href="#">Блог «Сила ума»</a>
						<a href="#">Додо ИС</a>
					</div>
					<div>
						<h4>Работа</h4>

						<a href="#">В пицерии</a>
					</div>
					<div>
						<h4>Партнерам</h4>

						<a href="#">Предложить помещение</a>
					</div>
					<div>
						<h4>Это интересно</h4>

						<a href="#">Почему мы готовим без перчаток?</a>
						<a href="#">Экскурсии и мастер-классы</a>
					</div>

					<div>
						<p>
							звонок по
							<span className={css.mobileNetworksButtons}>
								<button onClick={changeNetwork}>
									<img
										className={`${css.megacom} ${
											Network == 1 ? css.selected : ""
										}`}
										id="1"
										src="https://cdn.dodostatic.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg"
										alt="Megacom"
									/>
								</button>

								<button onClick={changeNetwork}>
									<img
										className={`${css.O} ${Network == 2 ? css.selected : ""}`}
										id="2"
										src="https://cdn.dodostatic.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg"
										alt="O!"
									/>
								</button>

								<button onClick={changeNetwork}>
									<img
										className={`${css.landlinePhone} ${
											Network == 3 ? css.selected : ""
										}`}
										id="3"
										src="https://cdn.dodostatic.net/static/Img/CallCenterIcons/d2a8e028a02042b6b72ff780d9fdbdd8.svg"
										alt="landline-phone"
									/>
								</button>
							</span>
						</p>

						<h1>
							{Network == 1
								? "0 (551) 550-550"
								: Network == 2
								? "0 (709) 550-550"
								: "0 (312) 550-550"}
						</h1>

						<a href="#">feedback@dodopizza.kg</a>
					</div>
				</div>

				<div className={css.payment}>
					<div>
						<p>Принимаем к оплате</p>

						<img
							src="https://dodopizza-a.akamaihd.net/site-static/dist/aec84a569e79a4696301.png"
							alt="Принимаем к оплате"
						/>
					</div>
				</div>

				<div className={css.copyright}>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.2 64">
							<path d="M268.9,41.8l-9.4-20.4c-1.1-2.2-2.5-3.2-4.6-3.2h-0.4c-2.2,0-3.7,1-4.7,3.2l-9.4,20.4c-0.9,2-0.3,3.8,1.6,4.5c1.5,0.7,3.4,0.1,4.1-1.4c0,0,0,0,0,0l0.1-0.2l2.1-4.4c2.1,0.7,4.2,1,6.4,1c2.1,0,4.2-0.3,6.2-1l2,4.4c0.8,1.7,2.7,2.4,4.4,1.6C268.9,45.5,269.6,43.5,268.9,41.8L268.9,41.8z M254.7,35c-1.4,0-2.8-0.2-4.1-0.5l4-8.9l4,8.9C257.4,34.8,256.1,35,254.7,35z"></path>
							<path d="M234.3,40.1h-14.3l14.1-12.7c2-1.8,2.8-3.3,2.8-5.2v-0.3c0-2.4-1.4-3.7-4-3.7H215c-1.8-0.1-3.3,1.3-3.4,3c0,0.1,0,0.2,0,0.3c-0.1,1.7,1.2,3.1,2.9,3.2c0.2,0,0.3,0,0.5,0h13.2L214.6,37c-2.7,2.4-3.3,3.8-3.3,5.5v0.3c0,2.3,1.5,3.7,4,3.7h19.1c1.8,0.1,3.3-1.2,3.4-3c0-0.1,0-0.2,0-0.4c0.1-1.7-1.2-3.2-2.9-3.2C234.6,40,234.5,40,234.3,40.1"></path>
							<path d="M204.4,40.1h-14.3l14.2-12.7c2-1.8,2.8-3.3,2.8-5.2v-0.3c0-2.4-1.4-3.7-4-3.7h-18c-1.8-0.1-3.3,1.2-3.4,3c0,0.1,0,0.2,0,0.3c-0.1,1.7,1.2,3.1,2.9,3.2c0.2,0,0.3,0,0.5,0h13.2L184.7,37c-2.7,2.4-3.3,3.8-3.3,5.5v0.3c0,2.3,1.5,3.7,4,3.7h19.1c1.8,0.1,3.3-1.2,3.4-3c0-0.1,0-0.2,0-0.3c0.1-1.7-1.2-3.2-2.9-3.2C204.8,40.1,204.6,40.1,204.4,40.1"></path>
							<path d="M172.1,17.9c-1.8-0.1-3.4,1.3-3.5,3.1c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3v22c0,2,1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6v-22c0.1-1.8-1.4-3.4-3.2-3.5L172.1,17.9"></path>
							<path d="M153.2,18.2h-11.5c-1.8-0.1-3.3,1.3-3.4,3.1c0,0.1,0,0.2,0,0.3v21.9c-0.1,1.8,1.3,3.3,3.1,3.4h0.3c1.8,0.1,3.3-1.3,3.4-3.1c0-0.1,0-0.2,0-0.3v-5.2h8c6.2,0,10.1-4.4,10.1-10.1S159.4,18.2,153.2,18.2z M153.2,31.8h-8v-7.2h8c1.8-0.1,3.4,1.4,3.5,3.2c0,0.1,0,0.3,0,0.4c0.2,1.8-1.2,3.4-3,3.6L153.2,31.8L153.2,31.8z"></path>
							<path d="M110.5,17.9c-7.9-0.2-14.4,6-14.6,13.9c0,0.2,0,0.4,0,0.6c-0.2,7.8,6,14.3,13.9,14.5h0.6c7.9,0.1,14.4-6.2,14.6-14.1c0-0.1,0-0.3,0-0.5c0.1-7.8-6.1-14.3-13.9-14.4C110.9,17.9,110.7,17.9,110.5,17.9z M110.5,40.4c-4.2,0.1-7.7-3.3-7.8-7.5c0-0.2,0-0.3,0-0.5c-0.1-4.3,3.3-7.8,7.6-7.9c4.2-0.1,7.7,3.2,7.9,7.4c0,0.2,0,0.3,0,0.5C118.3,37,115.2,40.4,110.5,40.4z"></path>
							<path d="M77.6,18.2h-9.3c-1.9,0-3.4,1.4-3.4,3.3c0,0.1,0,0.2,0,0.2v21.5c-0.1,1.8,1.3,3.3,3.1,3.4c0,0,0,0,0,0h9.6c8.3,0,14.7-5.8,14.7-14.3S85.9,18.2,77.6,18.2z M77.6,40h-5.9V24.8h5.9c4.7,0,7.9,2.8,7.9,7.5S82.3,40,77.6,40L77.6,40z"></path>
							<path d="M45.7,17.9c-7.9-0.2-14.4,6-14.6,13.9c0,0.2,0,0.4,0,0.6c-0.1,7.9,6.1,14.3,14,14.5c0,0,0,0,0,0h0.6c7.9,0.1,14.4-6.2,14.6-14.1c0-0.1,0-0.3,0-0.4c0.1-7.8-6.1-14.3-13.9-14.4C46.1,17.9,45.9,17.9,45.7,17.9z M45.7,40.4c-4.2,0.1-7.7-3.3-7.8-7.5c0-0.2,0-0.3,0-0.5c-0.1-4.3,3.3-7.8,7.6-7.9c4.2-0.1,7.8,3.2,7.9,7.4c0,0.2,0,0.3,0,0.5C53.4,37,50.4,40.4,45.7,40.4L45.7,40.4z"></path>
							<path d="M12.7,18.2H3.5c-1.9,0-3.4,1.4-3.4,3.3c0,0.1,0,0.2,0,0.2v21.5c-0.1,1.8,1.2,3.3,3,3.4c0,0,0.1,0,0.1,0h9.7c8.3,0,14.7-5.8,14.7-14.3S21.1,18.2,12.7,18.2z M12.7,40H6.9V24.8h5.9c4.7,0,7.9,2.8,7.9,7.5S17.5,40,12.7,40L12.7,40z"></path>
						</svg>

						<p>© 2023</p>

						<a>Правовая информация</a>
					</div>

					<div>
						<a target="_blank" href="https://instagram.com">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
								<path d="M29.56,24.55a5,5,0,0,0-5,5v80.88a5,5,0,0,0,5,5H73.1V80.26H61.25V66.53H73.1V56.41c0-11.74,7.17-18.13,17.65-18.13a97.08,97.08,0,0,1,10.58.54V51.09H94.07c-5.7,0-6.8,2.71-6.8,6.68v8.76h13.59L99.08,80.26H87.27v35.2h23.17a5,5,0,0,0,5-5V29.56a5,5,0,0,0-5-5H29.56Z"></path>
							</svg>
						</a>

						<a target="_blank" href="https://facebook.com">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
								<path d="M49.91,22.28A27.69,27.69,0,0,0,22.28,50V90a27.68,27.68,0,0,0,27.62,27.69H90.09A27.68,27.68,0,0,0,117.72,90V50a27.69,27.69,0,0,0-27.62-27.7H49.91Zm0,8.2H90.09A19.34,19.34,0,0,1,109.54,50V90a19.33,19.33,0,0,1-19.44,19.49H49.91A19.33,19.33,0,0,1,30.47,90V50A19.33,19.33,0,0,1,49.91,30.49Zm45.71,8.2a5.74,5.74,0,1,0,5.72,5.74A5.73,5.73,0,0,0,95.61,38.69ZM70,45.43A24.57,24.57,0,1,0,94.52,70,24.6,24.6,0,0,0,70,45.43Zm0,8.2A16.37,16.37,0,1,1,53.67,70,16.29,16.29,0,0,1,70,53.63Z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;