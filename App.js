import React, { Component } from "react";
import ScoreList from "./components/ScoreList";
import ScoreInput from "./components/ScoreInput";
import uuid from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    runs:0
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearCart = () => {
    this.setState({
      items: []
    });
  };
  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  increment = id => {

    this.setState(prevState => {
      
        return {
          runs: prevState.runs + 1
        } 
    });
  };
  
  decrement= id => {
    this.setState(prevState => {
      
      return {
        runs: prevState.runs - 1
      } 
  });
  };

  


  render() {
    
    
        
    return (
      <div className="container">
        <div className="row">
          
          <div className="col-10 mx-auto col-md-8 mt-4">
            
         
            <ScoreInput
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              item={this.state.item}
            />
            
            <ScoreList
              items={this.state.items}
              handleDelete={this.deleteItem}
              clearList={this.clearCart}
              runs={this.state.runs}
              increment={this.increment}
              decrement={this.decrement}
            />
          
  
          </div>
        </div>
      </div>
    );
  }
}
