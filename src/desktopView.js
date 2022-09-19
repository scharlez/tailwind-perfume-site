import React from "react";

function App() {
	return (
		<div className="flex items-center justify-center flex-1 w-screen h-screen bg-primary-cream">
      <div className="flex items-center justify-center w-1/2 bg-white border-2 rounded-md">
        <div className="w-1/2 h-full border-2">
					<img className="w-full object-fill min-h-0 h-full" src="./images/image-product-desktop.jpg" alt="perfume for ad"
          />
				</div>
        <div className="w-1/2 m-5">
					
          <div className="w-full text-xs pb-2 text-neutral-dark-grayish-blue font-['Montserrat']">Perfume</div>

          <div className="w-full pb-2 font-bold font-['Fraunces']">Gabrielle Essence Eau De Parfum</div>

          <div className="w-full h-1/6 text-sm pb-2 text-neutral-dark-grayish-blue font-['Montserrat']"> A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.</div>
					<div className="flex flex-row pb-2 items-center justify-between"> 
          <div className="w-full h-1/6 relative text-primary-dark-cyan font-bold font-['Fraunces']">$149.99</div>
						<div className="w-full h-1/6 line-through text-xs text-neutral-dark-grayish-blue">$169.99</div>
					</div>
					<div className="flex items-center justify-center bg-green-700 text-white border-1/2 rounded-sm text-xs pb-2 mx-8 font-['Montserrat']">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
						</svg>  
						Add to Cart</div>
          {/* <button className="w-full h-1/6 flex items-center justify-center bg-green-700 text-white border-1/2 rounded-sm text-sm p-1/2">Add to Cart</button> */}
        </div>
      </div>
    </div>
	);
}

export default App;
