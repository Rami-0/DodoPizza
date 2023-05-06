import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { basketSlice } from "./BasketSlice";
import { AuthSlice } from "./AuthSlice";
import { PizzaSlice } from "./PizzaSlice";

const reducers = combineReducers({
	basket: basketSlice.reducer,
	Auth: AuthSlice.reducer,
	Pizza: PizzaSlice.reducer, 
});
export const store = configureStore({
	reducer: reducers,
});

export const { addToBasket, deleteFromBasket, increase, decrease , GetTotalAmount } = basketSlice.actions;
export const { setAuth } = AuthSlice.actions;
export const { backtoInitial } = PizzaSlice.actions; 

store.subscribe(()=>{ 
	const state = store.getState()
	localStorage.setItem("auth", state.Auth.isAuth);

})
