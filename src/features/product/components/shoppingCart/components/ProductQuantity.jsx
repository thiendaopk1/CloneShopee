import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import QuantityCart from './QuantityCart';

ProductQuantity.propTypes = {
  idp: PropTypes.number,
  idc: PropTypes.number,
  onChange: PropTypes.func,
  quantityItem: PropTypes.number,
};

function ProductQuantity({ idp, idc, onChange = null, quantityItem }) {
  const handleOnChange = async (values) => {
    console.log('values', values);
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
      <QuantityCart name="quantity" idp={idp} idc={idc} form={form} />
    </form>
  );
}

export default ProductQuantity;
