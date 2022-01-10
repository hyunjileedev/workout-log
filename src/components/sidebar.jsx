import React, { Component } from 'react';
import Button from './button';

class Sidebar extends Component {
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
        <Button
          class="sidebar__btn"
          value="Reset counts"
          onClick={this.props.onReset}
        ></Button>
        <Button
          class="sidebar__btn"
          value="Clear items"
          onClick={this.props.onClear}
        ></Button>
      </aside>
    );
  }
}

export default Sidebar;
