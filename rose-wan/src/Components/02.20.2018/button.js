import React from 'react';

export const Button = ({children, potatoClick}) => {
  return <button onClick={potatoClick}>{children}</button>;
};
