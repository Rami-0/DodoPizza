import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
	name: "basket",
	initialState: {
		data: [],
	},
	reducers: {
		addToBasket: (state, action) => {
			state.data.push(action.payload);
		},
		deleteFromBasket: (state, action) => {
			const pizzaId = action.payload;
			console.log(pizzaId);
			state.data = state.data.filter((elem) => elem.id !== pizzaId);
		},
		increase: (state, action) => {
			// const pizzaId = state.data.findIndex(
			// 	(item) => item.id === action.payload
			// );
			// state.data[pizzaId].amount += 1;
		},
		decrease: (state, action) => {
			// const pizzaId = state.data.findIndex(
			// 	(item) => item.id === action.payload
			// );
			// state.data[pizzaId].amount -= 1;
		},
	},
});
