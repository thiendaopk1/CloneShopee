import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import purchaseApi from '../../../api/purchaseApi';
import '../../../assets/css/user.css';
import PurchaseFilterItem from './PurchaseFilterItem';

PurchaseFilter.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object.isRequired,
};

function PurchaseFilter({ filters, onChange = null }) {
  const [active, setactive] = useState(filters.status);
  const [values, setValues] = useState();

  useEffect(() => {
    (async () => {
      try {
        const list = await purchaseApi.getStatus();
        setValues(list);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

  const handleStatusChange = (newStatusId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      status: newStatusId,
    };

    onChange(newFilters);
    setactive(newStatusId);
  };

  return (
    <div className="purchase__filter">
      <PurchaseFilterItem values={values} onChange={handleStatusChange} active={active} />
    </div>
  );
}

export default PurchaseFilter;
