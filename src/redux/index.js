import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketSlice } from "./BasketSlice";


const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const incremented = counterSlice.actions.incremented
export const decremented = counterSlice.actions.decremented

window.plus = counterSlice.actions.incremented
window.minus = counterSlice.actions.decremented



const reducers = combineReducers({
  counter:counterSlice.reducer,
  basket:basketSlice.reducer
})
export const store = configureStore({
  reducer: reducers
});

export const { addToBasket, deleteFromBasket, increase, decrease } = basketSlice.actions

window.store = store
