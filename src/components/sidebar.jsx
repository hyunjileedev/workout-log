import React, { PureComponent } from 'react';
import Button from './button';

class Sidebar extends PureComponent {
  render() {
    const { upperCount, lowerCount } = this.props;
    return (
      <aside className="sidebar">
        <h1 className="sidebar__title">Workout Log</h1>
        <ul className="sidebar__counts">
          <li className="sidebar__count">
            <span className="count__icon">🙌 </span>
            <span className="count__name">Total</span>
            <span className="count__number">{upperCount + lowerCount}</span>
          </li>
          <li className="sidebar__count">
            <span className="count__icon">💪 </span>
            <span className="count__name">Upper</span>
            <span className="count__number">{upperCount}</span>
          </li>
          <li className="sidebar__count">
            <span className="count__icon">🦵 </span>
            <span className="count__name">Lower</span>
            <span className="count__number">{lowerCount}</span>
          </li>
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
