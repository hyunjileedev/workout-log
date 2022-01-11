import React, { PureComponent } from 'react';

class Count extends PureComponent {
  render() {
    const { name, number } = this.props;
    return (
      <li className="count">
        <span className="count__name">{name}</span>
        <span className="count__number">{number}</span>
      </li>
    );
  }
}

export default Count;
