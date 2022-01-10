import React, { Component } from 'react';
import AddForm from './add-form';
import Workout from './workout';

class Workouts extends Component {
  render() {
    return (
      <main className="workouts">
        <AddForm onAdd={this.props.onAdd} />
        <ul className="workouts">
          {this.props.workouts.map(workout => (
            <Workout
              key={workout.id}
              workout={workout}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default Workouts;
