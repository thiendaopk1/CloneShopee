import React from 'react';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/lib/integration/react';
import classNames from 'classnames';
PurchaseFilterItem.propTypes = {
  values: PropTypes.array,
  onChange: PropTypes.func,
  active: PropTypes.number,
};
PurchaseFilterItem.defaultProps = {
  values: [],
};
function PurchaseFilterItem({ values, onChange = null, active }) {
  const handleChange = (value) => {
    if (onChange) {
      onChange(value.id);
    }
  };
  return (
    <ul className="purchase__filter-list">
      {values.map((value) => (
        <li
          key={value.id}
          onClick={() => handleChange(value)}
          className={classNames('purchase__filter-item', {
            'purchase__filter-item--selected': value.id === active,
          })}
        >
          <span
            className={classNames('purchase__filter-item-name', {
              ' purchase__filter-item-name--selected': value.id === active,
            })}
          >
            {value.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default PurchaseFilterItem;
