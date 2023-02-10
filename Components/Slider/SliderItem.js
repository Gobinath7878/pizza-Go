import React from 'react';
import { Item, Caption } from 'react-bootstrap/Carousel';

function SliderItem({ data = {} }) {
  console.log(data);
  return (
    <Item key={`offer-slider-home-page-${data.id}`}>
      <img className="d-block w-100" src={data.image || ''} alt={data.label} />
      <Caption>
        <h3>{data.label || ''}</h3>
      </Caption>
    </Item>
  );
}

export default SliderItem;
