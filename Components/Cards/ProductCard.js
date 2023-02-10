import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/Reducers/Cart.reducer';
import { useSelector } from 'react-redux';

function ProductCard({ data = {} }) {
  const dispatcher = useDispatch();
  const { items = [] } = useSelector((state) => state.cart);

  function handleCart(e, item = {}) {
    console.log(item)
    if (e && item._id) {
      dispatcher(addItemToCart(item));
    }
  }

  function handleDisable() {
    return items.filter((i) => i._id === data._id).length;
  }

  return (
    <Card class="product-card">
      <Card.Img variant="top" src={data.imageUrl} className="product-image" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.price}</Card.Text>
        {data?.sizes?.length > 0 ? (
          <Button variant="primary">View Options</Button>
        ) : (
          <Button
            variant="primary"
            onClick={(e) => handleCart(e, data)}
            disabled={handleDisable() > 0 ? true : false}
          >
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
