import React from 'react';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';
Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const { name, price, quantitySold, rate, sale, salePrice, images } = product;
  const img = images[0].path;
  return (
    <div className="product__items">
      <div className="product__item">
        {/* img */}
        <div className="product__item-img">
          <img src={img} alt="" className="product__img" />
          <div className="product__satus">
            <div className="product__status-favorite">
              <span className="favorite">Yêu thích</span>
            </div>
          </div>
          <div className="product__badge">
            <div className="product__badge-promotion">
              <div className="product__badege-promotion-content">
                <span className="product__badge-promotion-sale">{sale}%</span>
                <span className="product__badge-promotion-label">Giảm</span>
              </div>
            </div>
          </div>
        </div>
        {/* infomation */}
        <div className="product__item-info">
          {/* name */}
          <div className="product__item-name">
            <div className="product__item-name-product">{name}</div>
          </div>
          {/* sale-price */}
          <div className="product__item-prices">
            <div className="product_item-prices-original">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(price)}
            </div>
            <div className="product__item-prices-sale" style={{ maxWidth: 'calc(100% - 22px)' }}>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(salePrice)}
            </div>
            <div className="product__item-freeShip">
              <svg height="12" viewBox="0 0 20 12" width="20" class="icon-free-shipping">
                <g fill="none" fill-rule="evenodd" transform="">
                  <rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect>
                  <rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect>
                  <rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect>
                  <rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect>
                  <circle cx="8" cy="10" fill="#00bfa5" r="2"></circle>
                  <circle cx="15" cy="10" fill="#00bfa5" r="2"></circle>
                  <path
                    d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z"
                    fill="#fff"
                  ></path>
                  <path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path>
                  <path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path>
                  <circle cx="8" cy="10" fill="#047565" r="1"></circle>
                  <circle cx="15" cy="10" fill="#047565" r="1"></circle>
                </g>
              </svg>
            </div>
          </div>
          {/* review */}
          <div className="product__item-reviews">
            <div className="product__item-like">
              <FavoriteBorderIcon />
            </div>
            <div className="product__item-rate">
              <Rating name="half-rating-read" value={rate} precision={0.1} readOnly />
            </div>
            <div className="product__item-saled">Đã bán {quantitySold}</div>
          </div>
          {/* adress */}
          <div className="product__item-address">Hồ Chí Minh</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
