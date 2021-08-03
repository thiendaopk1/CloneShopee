import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs, Paper, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';
import '../../../assets/css/productDetail.css';
import ProductImg from '../components/ProductImg';
import ProductInfo from '../components/ProductInfo';
ProductDetail.propTypes = {};

function ProductDetail(props) {
  return (
    <div className="app__container">
      <div className="grid wide content">
        <div className="row">
          <div className="col l-12">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link color="inherit" href="/">
                Shopee
              </Link>
              <Typography color="textPrimary">Product Name</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <Paper elevation={0}>
          <div className="row">
            <div className="col l-5">
              <ProductImg />
            </div>
            <div className="col l-7">
              <ProductInfo />
            </div>
          </div>
        </Paper>
        <Paper elevation={0}>
          <div className="row">
            <div className="col l-12">3</div>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default ProductDetail;
