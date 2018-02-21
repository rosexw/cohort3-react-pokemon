import React from 'react';

export const Input = ({ onInputChange, inputValue }) => {
  return <input onInputChange={onInputChange} value={inputValue} />;
};
