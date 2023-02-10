import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const pizzaLogo = 'https://cdn-icons-png.flaticon.com/512/3595/3595458.png';

function NavigationComponent() {
  const navigator = useNavigate();
  const { items = [] } = useSelector((state) => state.cart);
  const routeToCart = () => {
    navigator('/cart');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              alt=""
              src={pizzaLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <p style={{ color: '#FFFFFF', margin: '0px' }}>Pizzalo</p>
          </div>
          <div style={{ position: 'relative' }}>
            <FiShoppingCart color="#FFFFFF" onClick={routeToCart} />
            {items.length > 0 && (
              <span className="quantity-bubble">{items.length}</span>
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationComponent;
