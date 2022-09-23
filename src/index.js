import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Coupon from "./routes/coupon";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="coupon" element={<Coupon />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);
