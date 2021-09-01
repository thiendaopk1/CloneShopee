import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/productDetail.css';
ProductImg.propTypes = {
  product: PropTypes.object,
};

function ProductImg({ product = {} }) {
  const { images } = product;
  const [imgs] = useState(images);

  const [view, setView] = useState(images[0].path);

  const handleChangeView = (img) => {
    setView(img.path);
  };
  return (
    <div className="product__detail-img">
      <div className="product__detail-img-main">
        <div className="product__detail-img-top">
          <img src={view} alt="" className="product__detail-img-view" />
        </div>
        <div className="product__detail-slider">
          {imgs.map((img, index) => (
            <div key={img.id} className="product__detail-slider-item" onClick={() => handleChangeView(img)}>
              <img src={img.path} alt="" className="product__detail-slider-item-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductImg;
