import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  handleQuantityChange,
  removeFromCart,
} from '../../Redux/Reducers/Cart.reducer';
import { useDispatch } from 'react-redux';
import { FiTrash } from 'react-icons/fi';

function CartCard({ data = {}, quantityCB = () => {} }) {
  const dispatch = useDispatch();

  function handleItemQuanity(type, id) {
    console.log(type, id);
    if (type && id) {
      dispatch(handleQuantityChange({ type, id }));
    }
  }

  return (
    <Card
      class="product-card"
      style={{ padding: '0px', width: '100%', margin: '0 0 10px 0' }}
    >
      <div style={{ width: '100%', display: 'flex' }}>
        <Card.Img
          variant="top"
          src={data.imageUrl}
          style={{ width: '100px' }}
          className="cart-product-image"
        />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.price}</Card.Text>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{ width: '200px', display: 'flex', alignItems: 'center' }}
            >
              <Button
                color="success"
                size="sm"
                style={{ margin: '' }}
                onClick={() => handleItemQuanity('1', data._id)}
              >
                -
              </Button>
              <p style={{ margin: '0px' }}>{data.quantity || 1}</p>
              <Button
                color="success"
                size="sm"
                onClick={() => handleItemQuanity('0', data._id)}
              >
                +
              </Button>
            </div>
            <div>
              <Button
                color="success"
                size="sm"
                onClick={() => dispatch(removeFromCart({ id: data._id }))}
              >
                <FiTrash />
              </Button>
            </div>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CartCard;
