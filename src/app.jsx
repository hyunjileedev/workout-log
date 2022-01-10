import React, { Component } from 'react';
import './app.css';
import Sidebar from './components/sidebar';
import Workouts from './components/workouts';

class App extends Component {
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

  handleCountChange = category => {
    return this.state.workouts //
      .filter(workout => workout.category === category && workout.count > 0)
      .length;
  };

  handleReset = () =>
    this.setState(state => ({
      workouts: state.workouts.map(workout => ({ ...workout, count: 0 })),
    }));

  handleClear = () => this.setState({ workouts: [] });

  render() {
    return (
      <>
        <Sidebar
          upperCount={this.handleCountChange('upper')}
          lowerCount={this.handleCountChange('lower')}
          onReset={this.handleReset}
          onClear={this.handleClear}
        />
        <Workouts
          workouts={this.state.workouts}
          onAdd={this.handleAdd}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
