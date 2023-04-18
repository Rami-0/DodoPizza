import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPizza, deletePizza, getPizzas } from "../api/Api";
import { useDispatch } from "react-redux";

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzas", async () => {
	const res = await getPizzas();
	return res.data;
});
export const fetchDeletePizza = createAsyncThunk(
	"pizza/fetchDeletePizza",
	async (id) => {
		const res = await deletePizza(id);
		return res.data;
	}
);
export const fetchCreatePizza = createAsyncThunk(
	"pizza/fetchCreatePizza",
	async (data) => {
		const res = await createPizza(data);
		return res.data;
	}
);

export const PizzaSlice = createSlice({
	name: "pizza",
	initialState: {
		pizzaData: [],
		progress: 0,
		error: "",
		isCreating: "idle",
	},
	reducers: {
		backtoInitial: (state) => {
			state.isCreating = "idel";
		},
	},
	extraReducers: (builder) => {
		// CREATE pizza
		builder.addCase(fetchCreatePizza.fulfilled, (state, action) => {
			state.pizzaData.push(action.payload);
			state.isCreating = "success";
		});
		builder.addCase(fetchCreatePizza.pending, (state) => {
			state.isCreating = "pending";
		});

		// GET pizzas
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.pizzaData = action.payload;
			state.progress = 100;
		});
		builder.addCase(fetchPizzas.pending, (state) => {
			state.progress = 65;
		});
		builder.addCase(fetchPizzas.rejected, (state, action) => {
			state.error = action.payload;
			state.progress = 100;
		});

		//DELETE PIZZA
		builder.addCase(fetchDeletePizza.fulfilled, (state, action) => {
			state.pizzaData = state.pizzaData.filter(
				(item) => item.id !== action.payload.id
			);
		});
	},
});
