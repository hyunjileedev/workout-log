import React, { memo } from 'react';

const Workout = memo(({ workout, onIncrement, onDecrement, onDelete }) => {
  const { name, category, count } = workout;
  const categoryIcon = category === 'upper' ? '💪' : '🦵';
  return (
    <li className="workout">
      <div className="workout__text">
        <span className="workout__category">{categoryIcon} </span>
        <span className="workout__name">{name}</span>
        <span className="workout__count">{count}</span>
      </div>
      <div>
        <button
          className="workout__btn workout__increase"
          onClick={() => onIncrement(workout)}
        >
          <i className="fas fa-caret-up"></i>
        </button>
        <button
          className="workout__btn workout__decrease"
          onClick={() => onDecrement(workout)}
        >
          <i className="fas fa-caret-down"></i>
        </button>
        <button
          className="workout__btn workout__delete"
          onClick={() => onDelete(workout)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
});

export default Workout;
