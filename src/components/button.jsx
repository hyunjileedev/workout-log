import React, { memo } from 'react';

const Button = memo(({ styling, onClick, children }) => (
  <button className={styling} onClick={onClick}>
    {children}
  </button>
));

export default Button;
