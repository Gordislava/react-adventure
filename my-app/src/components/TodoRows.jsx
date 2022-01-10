import React, { Component } from "react";

export class TodoRows extends Component {
        render = () => (
      <div key={this.props.item.key}>
        <input 
          type="checkbox"
          className="input"
          checked={this.props.item.done} 
          onChange={() => this.props.callback(this.props.item)}
  
        />
        <label>{this.props.item.action}</label>
        <span
          onClick={() => this.props.delete(this.props.item.key)}
        >X</span>
      </div>
        );
    }