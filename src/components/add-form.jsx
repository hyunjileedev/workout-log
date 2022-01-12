import React, { memo } from 'react';

const AddForm = memo(({ onAdd }) => {
  const selectRef = React.createRef();
  const inputRef = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();

    const selectValue = selectRef.current.value;
    const inputValue = inputRef.current.value;
    if (selectValue === '') {
      window.alert('Please select workout category');
      return;
    }
    if (!/\S/.test(inputValue)) {
      window.alert('Please enter workout name');
      return;
    }

    onAdd(selectValue, inputValue);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <select ref={selectRef} className="add-form__select">
        <option value="">Category</option>
        <option value="upper">Upper</option>
        <option value="lower">Lower</option>
      </select>
      <input
        ref={inputRef}
        type="text"
        className="add-form__input"
        placeholder="Add a workout item"
      />
      <button type="submit" className="add-form__btn">
        Add
      </button>
    </form>
  );
});

export default AddForm;
