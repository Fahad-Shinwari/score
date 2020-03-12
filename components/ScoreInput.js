import React, { Component } from "react";

export default class ScoreInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a player"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className=
               "btn btn-block btn-success mt-3"
            
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}
