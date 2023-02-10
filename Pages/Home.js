import React, { useEffect } from 'react';
import Slider from '../Components/Slider';
import ProductCard from '../Components/Cards/ProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { saveAllProducts } from '../Redux/Reducers/Products.reducer';

function Home() {
  const dispatcher = useDispatch();
  const { products = [] } = useSelector((state) => state.product);

  useEffect(() => {
    fetch('https://foodlo-dev-app.onrender.com/api/products/')
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.data.length > 0) {
          dispatcher(saveAllProducts(result.data));
        }
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <section>
      {/* Navigation
      Slider
      Listings */}
      <Slider />
      <div id="product-listing-container" className="container mt-3">
        <Row>
          {products.length > 0 ? (
            products.map((d, i) => (
              <Col key={`product-card-pizza-${i}`} xs={6} sm={6} md={4} lg={3}>
                <ProductCard key={i} data={d} />
              </Col>
            ))
          ) : (
            <p>Pizza is not available today</p>
          )}
        </Row>
      </div>
    </section>
  );
}

export default Home;
