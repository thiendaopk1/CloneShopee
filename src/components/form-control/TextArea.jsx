import { makeStyles, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

TextArea.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiTextField-root': {
      '&>div': {
        '&>textarea': {
          '&.MuiInputBase-input': {
            fontSize: '13px',
          },
        },
      },
    },
  },
}));
function TextArea(props) {
  const classes = useStyles();
  const { form, name, label, disabled, placeholder } = props;
  const { errors } = form;
  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      className={classes.root}
      placeholder={placeholder}
      margin="normal"
      variant="outlined"
      fullWidth
      multiline
      rows={5}
      rowsMax={10}
      label={label}
      disabled={disabled}
      error={!!hasError}
      helperText={errors[name]?.message}
    />
  );
}

export default TextArea;
