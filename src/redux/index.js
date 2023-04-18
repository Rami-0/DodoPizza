import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { basketSlice } from "./BasketSlice";
import { counterSlice } from "./CounterSlice";
import { AuthSlice } from "./AuthSlice";
import { PizzaSlice } from "./PizzaSlice";

const reducers = combineReducers({
	counter: counterSlice.reducer,
	basket: basketSlice.reducer,
	Auth: AuthSlice.reducer,
	Pizza: PizzaSlice.reducer, 
});
export const store = configureStore({
	reducer: reducers,
});

export const { addToBasket, deleteFromBasket, increase, decrease , GetTotalAmount } = basketSlice.actions;
export const { decremented, incremented } = counterSlice.actions;
export const { setAuth } = AuthSlice.actions;
export const { backtoInitial } = PizzaSlice.actions; 

window.plus = counterSlice.actions.incremented;
window.minus = counterSlice.actions.decremented;

store.subscribe(()=>{ 
	const state = store.getState()
	localStorage.setItem("auth", state.Auth.isAuth);

})
