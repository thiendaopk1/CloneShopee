import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Input,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled, placeholder } = props;
  const { errors } = form;
  const hasError = !!errors[name];
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <div>
      <FormControl error={hasError} fullWidth>
        {/* <InputLabel htmlFor={name}>{label}</InputLabel> */}
        <Controller
          name={name}
          control={form.control}
          as={Input}
          id={name}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          label={label}
          disableUnderline
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          disabled={disabled}
          error={!!hasError}
          className="input-field"
          // helperText={errors[name]?.message}
        />
        {/* <FormHelperText>{errors[name]?.message}</FormHelperText> */}
      </FormControl>
    </div>
  );
}

export default PasswordField;
