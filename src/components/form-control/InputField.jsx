import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled, placeholder } = props;
  const { errors } = form;
  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      as={Input}
      margin="normal"
      disableUnderline
      fullWidth
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      error={!!hasError}
      // helperText={errors[name]?.message}

      className="input-field"
    />
  );
}

export default InputField;
