import React from "react";
import { Link } from "react-router-dom";

function App() {
	const windowWidth = window.innerWidth;
	let imageFile = "";
	windowWidth < 420
		? (imageFile = "./images/image-product-mobile.jpg")
		: (imageFile = "./images/image-product-desktop.jpg");

	// console.log(windowWidth);
	return (
		<div className="flex items-center justify-center flex-1 w-screen h-screen bg-primary-cream ">
			<div
				// style={{ height: "95%", width: "85%" }}
				className="flex flex-col w-5/6 border-2 rounded-md bg-white md:flex-row h-5/6 md:h-3/6 md:w-3/6"
			>
				<div className="border-2 h-1/2 md:h-full md:w-1/2">
					<img className="object-fit" src={imageFile} alt="product-display" />
				</div>
				<div className="flex flex-col justify-between px-2 py-2 h-1/2 md:h-full md:w-1/2">
					<div className="text-neutral-dark-grayish-blue font-['Monserrat]">
						P E R F U M E
					</div>

					<div className="font-bold font-['fraunces']">
						Gabrielle Essence Eau De Parfum
					</div>
					<div className="text-neutral-dark-grayish-blue">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL.
					</div>
					<div className="justify-end flex flex-row items-center">
						<div className="text-primary-dark-cyan font-['fraunces']">
							$149.99
						</div>
						<div className="line-through text-neutral-dark-grayish-blue">
							169.99
						</div>
						<nav
							style={{
								fontSize: "10px",
								paddingLeft: "1rem",
							}}
						>
							<Link to="/coupon">25% OFF Coupon!</Link>{" "}
						</nav>
					</div>
					<div>
						<button className="bg-green-700 text-white font-['Monserrat'] rounded-md justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
								/>
							</svg>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
