import css from "./CreatePizzaPage.module.css";
import Button from "./../../components/button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPizza } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreatePizza } from "../../redux/PizzaSlice";
import { backtoInitial } from "../../redux";


function CreatePizzaPage() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState();
	const [img, setImg] = useState("");
	const [description, setDescription] = useState("");
	const isCreating = useSelector((state) => state.Pizza.isCreating);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (isCreating === "success") {
			navigate("/admin");
			dispatch(backtoInitial())
		}
	}, [isCreating]);

	const submit = (e) => {
		e.preventDefault();
		const id = Date.now();
		const data = {
			img: img,
			price: price,
			name: name,
			description: description,
			id: id,
		};
		dispatch(fetchCreatePizza(data));
	};

	return (
		<div className={css.wrapper + " container"}>
			<h1>Создать</h1>
			<form className="container" onSubmit={submit}>
				<label>
					<div>Название</div>
					<input
						required
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Title"
						id=""
					/>
				</label>
				<label>
					<div>Изображение</div>
					<input
						required
						value={img}
						onChange={(e) => setImg(e.target.value)}
						type="text"
						name="img"
						placeholder="Img url"
						id=""
					/>
				</label>
				<label>
					<div>Цена</div>
					<input
						required
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						type="number"
						name="price"
						placeholder="Price"
						id=""
					/>
				</label>
				<label>
					<div>Описание</div>
					<textarea
						required
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						type="text"
						name="description"
						placeholder="Description"
						id=""
					/>
				</label>

				<Button
					variant={isCreating === 'pending' ? "disapled" : " "}
					disabled={isCreating === 'pending'}
					title={isCreating === 'pending' ? "Добавить..." : "Добавить"}
				/>
			</form>
		</div>
	);
}

export default CreatePizzaPage;
