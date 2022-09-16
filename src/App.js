import React from "react";

function App() {
	return (
		<div className="h-screen w-screen bg-white flex justify-center items-center">
    <div className="flex justify-center items-center flex-1 bg-yellow-50">
      <div className="flex rounded-xl shadow-black">
        <div className="w-1/2">
          <img src="./images/image-product-desktop.jpg" alt="perfume for ad"
          />
        </div>
        <div className="w-1/2 flex p-20 flex-col justify-between">
          <div className="title-cotainer">
            <div className="product-category">Perfume</div>
            <div className="product-title">Gabrielle Essence Eau De Parfum</div>
          </div>

          <div className="product-description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="product-price">
            <div className="current-price">$149.99</div>
            <div className="original-price">$169.99</div>
          </div>
          <div className="bg-green-600 flex justify-center items-center p-2 rounded-2xl ">Add to Cart</div>
        </div>
      </div>
    </div>
  </div>
	);
}

export default App;
