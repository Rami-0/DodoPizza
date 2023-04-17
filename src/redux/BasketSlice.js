import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
	name: "basket",
	initialState: {
		data: [],
	},
	reducers: {
		addToBasket: (state, action) => {
			const isAdded = state.data.find((elem) => elem.id === action.payload.id)
			if(!isAdded){
				state.data.push(action.payload);
			} else { 
				//toastify
				alert("already added") 
			}
		},
		deleteFromBasket: (state, action) => {
			const pizzaId = action.payload;
			console.log(pizzaId);
			state.data = state.data.filter((elem) => elem.id !== pizzaId);
		},
		increase: (state, action) => {
			const pizzaId = state.data.findIndex(
				(item) => item.id === action.payload
			);
			state.data[pizzaId].amount += 1;
		},
		decrease: (state, action) => {
			const pizzaId = state.data.findIndex(
				(item) => item.id === action.payload
			);
			state.data[pizzaId].amount -= 1;
		},
		GetTotalAmount: (state) => {
			return state.data.reduce((sum, crr) => (sum += crr.amount),0)
		}
	},
});
