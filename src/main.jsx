import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // 이때 여기 데이터는 { value: 0 } 이라는 객체이다.
    증가: (데이터) => {
      데이터.value += 1;
    },
  },
});

export const { 증가 } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export const store = configureStore({
  reducer: { 카운트: counterReducer },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
