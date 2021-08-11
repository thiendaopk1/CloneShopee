import { Breadcrumbs, makeStyles, Paper, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../../../assets/css/productDetail.css';
import useProductDetail from '../../hook/useProductDetail';
import Comment from '../components/comments/Comment';
import ProductImg from '../components/ProductImg';
import ProductInfo from '../components/ProductInfo';

ProductDetail.propTypes = {};
const useStyle = makeStyles((theme) => ({
  link: {
    marginTop: '20px',
    height: '16px',
    display: 'flex',
    justifyItems: 'center',
  },

  home: {
    textDecoration: 'none',
    fontSize: '13px',
    color: '#05a',
  },

  path: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '13px',
    color: '#808080',
  },

  icon: {
    fontSize: '18px',
  },

  paper: {
    marginTop: '16px',
  },
}));
function ProductDetail(props) {
  const classes = useStyle();
  // product
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(product);
  }, [product]);

  return (
    <div className="app__container">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" className={classes.icon} />}
              aria-label="breadcrumb"
              className={classes.link}
            >
              <Link color="inherit" href="/" className={classes.home}>
                Shopee
              </Link>
              <Typography color="textPrimary" className={classes.path}>
                Product Name
              </Typography>
            </Breadcrumbs>
          </div>
        </div>
        <Paper elevation={0} className={classes.paper}>
          <div className="row">
            <div className="col l-5">
              <ProductImg />
            </div>
            <div className="col l-7">{product.id && <ProductInfo product={product} />}</div>
          </div>
        </Paper>
        <div>
          <div className="row">
            <div className="col l-12">
              <Comment id={productId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
