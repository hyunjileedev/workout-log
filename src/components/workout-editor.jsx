import React from 'react';
import AddForm from './add-form';
import Workout from './workout';

const WorkoutEditor = ({
  workouts,
  onAdd,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  return (
    <main className="workout-editor">
      <AddForm onAdd={onAdd} />
      <ul className="workouts">
        {workouts.map(workout => (
          <Workout
            key={workout.id}
            workout={workout}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </main>
  );
};

export default WorkoutEditor;
