import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import QuantityCart from './QuantityCart';
ProductQuantity.propTypes = {
  idp: PropTypes.number,
  idc: PropTypes.number,
  onChange: PropTypes.func,
  quantityItem: PropTypes.number,
};

function ProductQuantity({ id1, id2, onChange = null, quantityItem }) {
  const handleOnChange = async (values) => {
    if (onChange) {
      await onChange(values);
    }
  };
  const form = useForm({
    defaultValues: {
      quantity: quantityItem,
    },
  });
  return (
    <form>
      <QuantityCart name="quantity" id1={id1} id2={id2} form={form} />
    </form>
  );
}

export default ProductQuantity;
