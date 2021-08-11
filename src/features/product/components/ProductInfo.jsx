import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddToCartForm from './AddToCartForm';
import { addToCart } from './shoppingCart/CartSlice';
import { useDispatch } from 'react-redux';
ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyle = makeStyles((theme) => ({
  rating: {
    color: '#ee4d2d',
    stroke: '#ee4d2d',
    padding: '4px 0',
  },

  iconDown: {
    width: '20px',
    height: '20px',
  },
}));

function ProductInfo({ product = {} }) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { name, salePrice, price, quantitySold, rate, colors } = product;
  const [product1, setProduct1] = useState(product);
  const handleAddtoCart = (data) => {
    const newProduct = { ...product1 };
    const res = colors.filter((colors) => colors.id === data.idc);
    newProduct.colors = res;
    console.log(newProduct);
    const action = addToCart({
      idp: product.id,
      idc: data.idc,
      newProduct,
      quantity: data.quantity,
    });
    dispatch(action);
  };

  return (
    <div className="product__info">
      <div className="product__info-app">
        <div className="product__name">
          <div className="product__name-favorite">Yêu thích</div>
          <span>{name}</span>
        </div>
        <div className="product__review">
          <div className="product__review-rated">
            <div className="product__review-number">1.2</div>
            <Rating
              name="half-rating-read"
              value={rate}
              precision={0.1}
              readOnly
              className={classes.rating}
            />
          </div>
          <div className="product__review-reviewed">
            <div className="product__review-reviewed-number">1,7k</div>
            <div className="product__review-reviewed-label">Đánh giá</div>
          </div>
          <div className="product__review-sold">
            <div className="product__review-sold-number">{quantitySold}</div>
            <div className="product__review-sold-label">Đã bán</div>
          </div>
        </div>
        <div className="product__prices">
          <div className="product__prices-flex">
            <div className="product__prices-originalPrices">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(price)}
            </div>
            <div className="product__prices-center">
              <div className="product__prices-salePrices">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(salePrice)}
              </div>
              <div className="product__prices-promotion">{rate}% giảm</div>
            </div>
          </div>
        </div>
        <div className="product__delivery">
          <div className="product__delivery-column">
            <div className="product__delivery-info">
              <label className="product__delivery-label">Vận chuyển</label>
              <div className="product__delivery-detail">
                <div className="product__delivery-shipping">
                  <div className="product__delivery-freeship">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1cdd37339544d858f4d0ade5723cd477.png"
                      alt=""
                      style={{ width: '25px', height: '15px' }}
                      className="product__delivery-freeship-img"
                    />
                    Miễn phí vận chuyển
                  </div>
                  <div className="product__delivery-freeship-note">
                    Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu
                  </div>
                </div>
                <div className="product__delivery-prices">
                  <div className="product__delivery-prices-icon">
                    <svg
                      enable-background="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      class="icon-free-shipping-line"
                    >
                      <g>
                        <line
                          fill="none"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="8.6"
                          x2="4.2"
                          y1="9.8"
                          y2="9.8"
                        ></line>
                        <circle cx="3" cy="11.2" fill="none" r="2" stroke-miterlimit="10"></circle>
                        <circle cx="10" cy="11.2" fill="none" r="2" stroke-miterlimit="10"></circle>
                        <line fill="none" stroke-miterlimit="10" x1="10.5" x2="14.4" y1="7.3" y2="7.3"></line>
                        <polyline
                          fill="none"
                          points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        ></polyline>
                        <polyline
                          fill="none"
                          points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        ></polyline>
                      </g>
                    </svg>
                  </div>
                  <div className="product__delivery-prices-address">
                    <div className="product__delivery-transport-to">
                      <div className="product__delivery-transport-label">Vận chuyển tới</div>
                      <div className="product__delivery-transport-address">
                        <span className="address">Hồ Chí Minh</span>
                        <ExpandMoreIcon className={classes.iconDown} />
                      </div>
                    </div>
                    <div className="product__delivery-price">
                      <div className="product__delivery-price-label">Phí vận chuyện</div>
                      <div className="product__delivery-price-priceDetail">
                        <span className="price">22.000</span>
                        <ExpandMoreIcon className={classes.iconDown} />
                        <div className="product__delivery-detail-box">
                          <div className="product__delivery-detail-card">
                            <div className="product__delivery-detail-info">
                              <div className="product__delivery-detail-pirce">
                                <div className="product__delivery-detail-type">Nhanh</div>
                                <div className="product__delivery-detail-money">22.000</div>
                              </div>
                              <div className="product__delivery-detail-date">Giao hàng từ 2-24 ngày</div>
                              <div className="product__delivery-detail-infos">
                                <span className="product__delivery-detail-info-1">Miễn Phí Vận Chuyển</span>{' '}
                                cho đơn hàng từ{' '}
                                <span className="product__delivery-detail-info-1">₫50.000</span> (giảm tối đa{' '}
                                <span className="product__delivery-detail-info-1">₫25.000</span>)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__action">
          <AddToCartForm colors={colors} onSubmit={handleAddtoCart} />
        </div>
        <div className="product__more">
          <a href="" className="product__more-1">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/67454c89080444c5997b53109072c9e0.png"
              alt=""
              className="img"
            />
            <span className="more1">Shopee Đảm Bảo</span>
            <span className="more2">3 Ngày Trả Hàng / Hoàn Tiền</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
