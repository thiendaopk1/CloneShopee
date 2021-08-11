import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  makeStyles,
  OutlinedInput,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../CartSlice';

QuantityCart.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  btn: {
    borderRadius: '0px',
    border: '1px solid rgba(0,0,0,.09)',
    padding: '0px',
    height: '35.25px',
    width: '35.25px',
    fontWeight: '600',
  },

  icon: {
    fontWeight: '600',
  },

  input: {
    width: '50px',
    borderRadius: '0px',
    fontSize: '12px',
  },
}));
function QuantityCart(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { form, id1, id2, name, label, disabled } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];
  return (
    <div className="quantity__control">
      <FormControl error={hasError} fullWidth margin="normal" variant="outlined" size="small">
        <Typography>{label}</Typography>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <Box className={classes.root}>
              <IconButton className={classes.btn}>
                <RemoveIcon
                  className={classes.icon}
                  onClick={() => {
                    setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1);
                    dispatch(
                      setQuantity({
                        id1,
                        id2,
                        quantity: value ? value - 1 : 1,
                      }),
                    );
                  }}
                />
              </IconButton>

              <OutlinedInput
                className={classes.input}
                id={name}
                type="number"
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={() => {
                  dispatch(
                    setQuantity({
                      id1,
                      id2,
                      quantity: value,
                    }),
                  );
                }}
              />

              <IconButton className={classes.btn}>
                <AddIcon
                  className={classes.icon}
                  onClick={() => {
                    setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1);
                    dispatch(
                      setQuantity({
                        id1,
                        id2,
                        quantity: value ? value + 1 : 1,
                      }),
                    );
                  }}
                />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityCart;
