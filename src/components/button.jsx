import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    return (
      <button className={this.props.class} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
