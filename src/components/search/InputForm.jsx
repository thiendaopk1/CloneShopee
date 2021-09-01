import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRef } from 'react';

InputForm.propTypes = {
  onsubmit: PropTypes.func,
  changeVPO: PropTypes.func,
  changeVPC: PropTypes.func,
};

function InputForm({ onsubmit = null, changeVPO = null, changeVPC = null }) {
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onsubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onsubmit(formValues);
    }, 300);
  };

  return (
    <form className="header__search-form">
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="header__search-input"
        onChange={handleSearchTermChange}
        value={searchTerm}
        onClick={() => {
          if (changeVPO) changeVPO();
        }}
        onBlur={() => {
          if (changeVPC) changeVPC();
        }}
      />
    </form>
  );
}

export default InputForm;
