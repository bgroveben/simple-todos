import React, { Component, PropTypes } from 'react';

// Task component -- represents an single todo item
export default class Task extends Component {
  render() {
    return (
      <li>{ this.props.task.text }</li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop
  // We can use propTypes to indicate that it is required
  task: PropTypes.object.isRequired,
};
