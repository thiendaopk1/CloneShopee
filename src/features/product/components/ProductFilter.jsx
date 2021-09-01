import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListIcon from '@material-ui/icons/List';
import { Button, makeStyles, TextField } from '@material-ui/core';
import BrandFilter from './filter/BrandFilter';
import PriceFilter from './filter/PriceFilter';
import RateFilter from './filter/RateFilter';
import { useHistory } from 'react-router-dom';
import brandApi from '../../../api/brandApi';
import FilterSkeleton from '../../../components/skeleton/FilterSkeleton';
import RateSkeletion from '../../../components/skeleton/RateSkeletion';
ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
};
const useStyle = makeStyles((theme) => ({
  icon: {
    fontSize: '18px',
    marginRight: '8px',
  },
  input: {
    // border: '1px solid black',
  },
  btn: {
    marginTop: '20px',
    '&.MuiButton-root': {
      borderRadius: '2px',
      backgroundColor: 'rgb(238, 77, 45)',
      color: '#fff',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
    },
  },
}));

function ProductFilter({ filters, onChange = null, loading }) {
  const classes = useStyle();

  const [brandList, setBrandList] = useState([]);
  const [active, setactive] = useState(filters.brand);

  useEffect(() => {
    (async () => {
      try {
        const list = await brandApi.getAll();
        setBrandList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleBrandChange = (newBrandId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      brand: newBrandId,
    };

    onChange(newFilters);
    setactive(newBrandId);
  };

  const handlePriceChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };

  const handleRateChange = (newRateId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      rate: newRateId,
    };

    onChange(newFilters);
  };
  return (
    <nav className="category hide-on-mobile-tablet">
      <h3 className="category__heading" style={{ display: 'flex' }}>
        <ListIcon className={classes.icon} />
        Danh mục
      </h3>

      {loading ? (
        <FilterSkeleton />
      ) : (
        <BrandFilter onChange={handleBrandChange} brandList={brandList} active={active} />
      )}
      {loading ? <RateSkeletion /> : <RateFilter onChange={handleRateChange} />}

      <PriceFilter onChange={handlePriceChange} />
    </nav>
  );
}

export default ProductFilter;
