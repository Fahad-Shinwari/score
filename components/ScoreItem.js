import React, { Component } from "react";


export default class ScoreItem extends Component {
  render() {
    const { title, handleDelete,runs,increment,decrement } = this.props;
    return (
    
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
         
        <h6>{title}</h6>
        <button
          type="button"
          className="btn btn-primary btn-sm text-capitalize"
          onClick={decrement}
        >
          -
        </button>
        <h6>{runs}</h6>
        <button
          type="button"
          className="btn btn-primary btn-sm text-capitalize"
          onClick={increment}
        >
          +
        </button>
        <div className="todo-icon">
            <button
          type="button"
          className="btn btn-danger btn-block text-capitalize"
          onClick={handleDelete}
        >
          Delete Player
        </button>
        </div>
      </li>
    );
  }
}
