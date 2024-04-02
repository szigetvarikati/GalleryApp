import React from 'react';

function Input({ value, placeholder, onChange }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
