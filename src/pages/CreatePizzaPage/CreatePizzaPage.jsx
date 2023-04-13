import css from "./CreatePizzaPage.module.css";
import Button from "./../../components/button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPizza } from "../../components/api/Api";
function CreatePizzaPage() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState();
	const [img, setImg] = useState("");
	const [description, setDescription] = useState("");
	const [isSending, setSending] = useState(false);

  const navigate = useNavigate()
	const submit = (e) => {
		e.preventDefault();
		setSending(true);
		const id = Date.now();
		const data = {
			img: img,
			price: price,
			name: name,
			description: description,
			id: id,
		}
		createPizza(data)
		.finally(()=>{
			setSending(false)
    }).then((res) => {
			if(res.status === 201){
				navigate("/admin")
      }
    })
	};
	// fetch(base_url + "pizza", {
	// 	method: "POST",
	// 	headers: { "Content-Type": "application/json" },
	// 	body: JSON.stringify({
	// 		img: img,
	// 		price: price,
	// 		name: name,
	// 		description: description,
	// 		id: id,
	// 	}),
	// })
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
					variant={isSending ? "disabled" : " "}
					disabled={isSending}
					title={isSending ? "Добавить..." : "Добавить"}
				/>
			</form>
		</div>
	);
}

export default CreatePizzaPage;
