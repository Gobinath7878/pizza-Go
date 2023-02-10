import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderItem from './SliderItem';

const bannerData = [
  {
    id: 1,
    image:
      'https://pbs.twimg.com/ad_img/1169253644539056128/zPW1vhRi?format=jpg&name=900x900',
    label: '50% Offer all month long',
  },
  {
    id: 2,
    image:
      'https://pbs.twimg.com/ad_img/1169253285020127232/3tzInWZq?format=jpg&name=900x900',
    label: '50% Offer all month long - Big hunger fest',
  },
  {
    id: 3,
    image: 'https://pbs.twimg.com/media/FBbQ52kVUAACvsU.jpg',
    label: '15% Offer - On SBI Cards',
  },
  {
    id: 4,
    image:
      'https://www.couponmoto.com/boards/wp-content/uploads/2019/09/swiggy_food.png',
    label: '15% Offer - First order',
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bannerData.length > 0
        ? bannerData.map((d, i) => (
            <Carousel.Item key={`offer-slider-home-page-${d.id}`}>
              <img
                className="d-block w-100"
                src={d.image || ''}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{d.label || ''}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        : null}
    </Carousel>
  );
}

export default Slider;
