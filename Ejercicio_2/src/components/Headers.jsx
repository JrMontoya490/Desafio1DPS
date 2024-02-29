import React, { useState } from "react";

export const Headers = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onUpdateQuantity = (product, newQuantity) => {
    const updatedProducts = allProducts.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    );

    setAllProducts(updatedProducts);
    updateCartTotal(updatedProducts);
  };

  const updateCartTotal = (products) => {
    const newTotal = products.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);

    setTotal(newTotal);
  };

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setAllProducts(results);
    updateCartTotal(results);
    setCountProducts((prevCount) => prevCount - product.quantity);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      <img
        src="https://mario.nintendo.com/static/fd723b2893d4d2b39ef71bfdb4e3329c/579b4/mario-background.png"
        className="logo-image"
      />
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/800px-Mario_Series_Logo.svg.png"
      className="logo-medio"/>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://mario.nintendo.com/static/f3ef438594580478cd7b3bf0e00aa601/4bbdc/brick-yellow.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) =>
                          onUpdateQuantity(
                            product,
                            parseInt(e.target.value, 10)
                          )
                        }
                        className="quantity-input"
                      />
                      <img
                        src={product.urlImage}
                        alt={product.title}
                        className="imagen-producto-carrito"
                      />
                      <p className="titulo-producto-carrito">{product.title}</p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                    </div>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => {
                        const confirmed = window.confirm(
                          "¿Estás seguro de eliminar el artículo?"
                        );
                        if (confirmed) onDeleteProduct(product);
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
