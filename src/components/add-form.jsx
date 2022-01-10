import React, { Component } from 'react';

class AddForm extends Component {
  state = {
    selectValue: '',
    inputValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const selectValue = this.state.selectValue;
    const inputValue = this.state.inputValue;
    if (selectValue === '') {
      window.alert('Please select a category');
      return;
    }
    this.props.onAdd(selectValue, inputValue);
  };

  handleSelectChange = e =>
    this.setState(state => ({
      ...state,
      selectValue: e.target.value,
    }));

  handleInputChange = e =>
    this.setState(state => ({
      ...state,
      inputValue: e.target.value,
    }));

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <select
          className="add-form__select"
          value={this.state.selectValue}
          onChange={this.handleSelectChange}
        >
          <option value="">Category</option>
          <option value="upper">Upper</option>
          <option value="lower">Lower</option>
        </select>
        <input
          type="text"
          className="add-form__input"
          placeholder="Add a workout item"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="add-form__btn">
          Add
        </button>
      </form>
    );
  }
}

export default AddForm;
