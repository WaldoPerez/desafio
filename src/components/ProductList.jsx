import React from "react";
import { home } from "../app/home";

export const ProductList = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) => {

  const categories = ["Video", "Audio", "Electrónica", "Electrodoméstico", "Muebles"];

  const getProductsByCategory = (category) => {
    return home.filter((product) => product.category === category);
  };


  const onAddProduct = (product) => {
    const existingProduct = allProducts.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
    updateTotal(); 
  };


  const updateTotal = () => {
    let totalPrice = 0;
    allProducts.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    setTotal(totalPrice);
  };

  return (
    <div className="container-items">
      {/* Iterar sobre cada categoría */}
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="items">
            {/* Mostrar los productos de la categoría */}
            {getProductsByCategory(category).map((product) => (
              <div className="item" key={product.id}>
                <figure>
                  <img src={product.urlImage} alt={product.title} />
                </figure>
                <div className="info-product">
                  <h3>{product.title}</h3>
                  <p className="price">${product.price}</p>
                  <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
