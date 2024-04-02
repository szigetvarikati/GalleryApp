import React from 'react';

function MyButton({ variant, onClick, children, label }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label || children}
    </button>
  );
}

export default MyButton;
