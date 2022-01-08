import React, { Component } from 'react';

class Workout extends Component {
  state = {
    count: 0,
  };

  onIncrement = () =>
    this.setState(state => ({
      count: state.count + 1,
    }));

  onDecrement = () => {
    this.setState(state => ({
      count: state.count - 1 < 0 ? 0 : state.count - 1,
    }));
  };

  render() {
    return (
      <li className="workout">
        <div className="workout__text">
          <span className="workout__category">🦵 </span>
          <span className="workout__name">squat</span>
          <span className="workout__count">{this.state.count}</span>
        </div>
        <div>
          <button
            className="workout__btn workout__increase"
            onClick={this.onIncrement}
          >
            <i class="fas fa-caret-up"></i>
          </button>
          <button
            className="workout__btn workout__decrease"
            onClick={this.onDecrement}
          >
            <i class="fas fa-caret-down"></i>
          </button>
          <button className="workout__btn workout__delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Workout;
