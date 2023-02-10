import React, { useState, useEffect } from 'react';
import { data } from '../data';
import Row from 'react-bootstrap/Row';
import CartCard from '../Components/Cards/CartCard';
import { useSelector } from 'react-redux';

const cartTotal = (data) => {
  let total = 0;
  if (data.length < 0) {
    total = 0;
  } else {
    data.forEach((d) => {
      total += d.quantity || 1 * d.price;
    });
  }
  return total;
};

function Cart() {
  const { items = [] } = useSelector((state) => state.cart);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartTotal(items));
  }, [items]);

  const handleQuantityBtn = (t, id) => {
    console.log(t, id);
    let cartCopy = [...cart];
    const itemSelected = cartCopy.find((d) => d.id === id);
    if (t === '0') {
      itemSelected.quantity += 1;
    }
    if (t === '1' && itemSelected.quantity > 1) {
      itemSelected.quantity -= 1;
    }
    setCart(cartCopy);
  };

  return (
    <section id="cart-page-container" className="p-2">
      <h4>Cart ({items.length})</h4>
      <div id="cart-listing-container" className="container mt-3">
        <Row>
          {items.length > 0 ? (
            items.map((d, i) => (
              <CartCard key={i} data={d} quantityCB={handleQuantityBtn} />
            ))
          ) : (
            <p>Pizza is not available today</p>
          )}
        </Row>
      </div>
      <div className="cart-calculator">
        <ul>
          {cart.length > 0 &&
            cart.map((d, i) => (
              <li key={i}>
                {d.name} X {d.quantity}
              </li>
            ))}
        </ul>
        <h3>Cart Total</h3>
        <p>{total}</p>
      </div>
    </section>
  );
}

export default Cart;
