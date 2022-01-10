import React, { Component } from 'react';
import AddForm from './add-form';
import Workout from './workout';

class Workouts extends Component {
  state = {
    workouts: [
      { id: 1, name: 'squat', category: 'lower', count: 3 },
      {
        id: 2,
        name: 'push-up',
        category: 'upper',
        count: 2,
      },
      { id: 3, name: 'crunch', category: 'upper', count: 4 },
    ],
  };

  handleAdd = (category, name) => {
    this.setState(state => ({
      workouts: [
        ...state.workouts,
        { id: Date.now(), name, category, count: 0 },
      ],
    }));
  };

  handleIncrement = workout =>
    this.setState(state => ({
      workouts: state.workouts.map(el => {
        if (el.id !== workout.id) {
          return el;
        } else {
          const count = el.count + 1;
          return { ...el, count };
        }
      }),
    }));

  handleDecrement = workout =>
    this.setState(state => ({
      workouts: state.workouts.map(el => {
        if (el.id !== workout.id) {
          return el;
        } else {
          const count = el.count - 1 < 0 ? 0 : el.count - 1;
          return { ...el, count };
        }
      }),
    }));

  handleDelete = workout =>
    this.setState(state => ({
      workouts: state.workouts.filter(el => el.id !== workout.id),
    }));

  render() {
    return (
      <>
        <AddForm onAdd={this.handleAdd} />
        <ul className="workouts">
          {this.state.workouts.map(workout => (
            <Workout
              key={workout.id}
              workout={workout}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Workouts;
