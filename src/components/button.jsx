import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className={this.props.class} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
