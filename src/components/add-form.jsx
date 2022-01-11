import React, { PureComponent } from 'react';

class AddForm extends PureComponent {
  selectRef = React.createRef();
  inputRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    const selectValue = this.selectRef.current.value;
    const inputValue = this.inputRef.current.value;
    if (selectValue === '') {
      window.alert('Please select workout category');
      return;
    }
    if (!/\S/.test(inputValue)) {
      window.alert('Please enter workout name');
      return;
    }

    this.props.onAdd(selectValue, inputValue);
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <select ref={this.selectRef} className="add-form__select">
          <option value="">Category</option>
          <option value="upper">Upper</option>
          <option value="lower">Lower</option>
        </select>
        <input
          ref={this.inputRef}
          type="text"
          className="add-form__input"
          placeholder="Add a workout item"
        />
        <button type="submit" className="add-form__btn">
          Add
        </button>
      </form>
    );
  }
}

export default AddForm;
