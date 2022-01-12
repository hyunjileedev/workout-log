import React, { useCallback, useState } from 'react';
import './app.css';
import Sidebar from './components/sidebar';
import WorkoutEditor from './components/workout-editor';

const App = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'squat', category: 'lower', count: 3 },
    {
      id: 2,
      name: 'push-up',
      category: 'upper',
      count: 2,
    },
    { id: 3, name: 'crunch', category: 'upper', count: 4 },
  ]);

  const handleAdd = useCallback((category, name) => {
    setWorkouts(workouts => [
      ...workouts,
      { id: Date.now(), name, category, count: 0 },
    ]);
  }, []);

  const handleIncrement = useCallback(
    workout =>
      setWorkouts(workouts =>
        workouts.map(el => {
          if (el.id === workout.id) {
            const count = el.count + 1;
            return { ...el, count };
          }
          return el;
        })
      ),
    []
  );

  const handleDecrement = useCallback(
    workout =>
      setWorkouts(workouts =>
        workouts.map(el => {
          if (el.id !== workout.id) {
            const count = el.count - 1 < 0 ? 0 : el.count - 1;
            return { ...el, count };
          }
          return el;
        })
      ),
    []
  );

  const handleDelete = useCallback(
    workout =>
      setWorkouts(workouts => workouts.filter(el => el.id !== workout.id)),
    []
  );

  const handleCountChange = category =>
    workouts.filter(
      workout => workout.category === category && workout.count > 0
    ).length;

  const handleReset = useCallback(
    () =>
      setWorkouts(workouts =>
        workouts.map(workout => {
          if (workout.count === 0) {
            return workout;
          }
          return { ...workout, count: 0 };
        })
      ),
    []
  );

  const handleClear = useCallback(() => setWorkouts([]), []);

  return (
    <>
      <Sidebar
        upperCount={handleCountChange('upper')}
        lowerCount={handleCountChange('lower')}
        onReset={handleReset}
        onClear={handleClear}
      />
      <WorkoutEditor
        workouts={workouts}
        onAdd={handleAdd}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
