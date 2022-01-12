import React, { memo } from 'react';
import Count from './count';
import Button from './button';

const Sidebar = memo(({ upperCount, lowerCount, onReset, onClear }) => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__title">Workout Log</h1>
      <ul className="sidebar__counts">
        <Count name="🙌 total" number={upperCount + lowerCount} />
        <Count name="💪 upper" number={upperCount} />
        <Count name="🦵 lower" number={lowerCount} />
      </ul>
      <Button styling="sidebar__btn" onClick={onReset}>
        Reset counts
      </Button>
      <Button styling="sidebar__btn" onClick={onClear}>
        Clear items
      </Button>
    </aside>
  );
});

export default Sidebar;
