import React, { Component } from "react";
import ScoreItem from "./ScoreItem";
export default class ScoreList extends Component {
  render() {
    const { items, clearList,increment,decrement, handleDelete,runs} = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Players list</h3>
        {items.map(item => {
          return (
            <ScoreItem
              key={item.id}
              title={item.title}
              runs={runs}

              handleDelete={() => handleDelete(item.id)}
              increment={()=> increment(item.id)}
              decrement={()=> decrement(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
