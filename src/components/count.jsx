import React, { memo } from 'react';

const Count = memo(({ name, number }) => (
  <li className="count">
    <span className="count__name">{name}</span>
    <span className="count__number">{number}</span>
  </li>
));

export default Count;
