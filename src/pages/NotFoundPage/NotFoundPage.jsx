import { useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { MyLoadingBar } from "../../components/myLoadingBar/MyLoadingBar";
function NotFoundPage() {
	const navigate = useNavigate();

	const navigateHome = () => {
		navigate("/");
	};

	setTimeout(() => {
		navigateHome();
	}, 3500);
	return (
		<div className={css.wrapper}>
			<MyLoadingBar/>
			<span>4</span>
			<span>0</span>
			<span>4</span>
			<div>
				<span>S</span>
				<span>e</span>
				<span>e</span>
				<span>m</span>
				<span>s</span>
				<span> </span>
				<span>L</span>
				<span>i</span>
				<span>k</span>
				<span>e</span>
				<span> </span>
				<span>T</span>
				<span>h</span>
				<span>i</span>
				<span>s</span>
				<span> </span>
				<span>i</span>
				<span>s</span>
				<span> </span>
				<span>N</span>
				<span>o</span>
				<span>t</span>
				<span> </span>
				<span>F</span>
				<span>o</span>
				<span>u</span>
				<span>n</span>
				<span>d</span>
        

			</div>
		</div>
	);
}

export default NotFoundPage;
