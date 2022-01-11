import React, { PureComponent } from 'react';
import Count from './count';
import Button from './button';

class Sidebar extends PureComponent {
  render() {
    const { upperCount, lowerCount } = this.props;
    return (
      <aside className="sidebar">
        <h1 className="sidebar__title">Workout Log</h1>
        <ul className="sidebar__counts">
          <Count name="🙌 total" number={upperCount + lowerCount} />
          <Count name="💪 upper" number={upperCount} />
          <Count name="🦵 lower" number={lowerCount} />
        </ul>
        <Button class="sidebar__btn" onClick={this.props.onReset}>
          Reset counts
        </Button>
        <Button class="sidebar__btn" onClick={this.props.onClear}>
          Clear items
        </Button>
      </aside>
    );
  }
}

export default Sidebar;
