import React, { Component } from 'react';
import './Slider.scss'

export default class Slider extends Component {
  state = {
    value: this.props.value
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e);
  }
  render() {
    const { minValue, maxValue } = this.props;
    // const styles = {
    //   left: '249.094px'; height: 0px; width: 0px; top: 10px; margin-left: -6px;
    // }
    return (
      <div className="slidecontainer">
        <button className="thumb btn btn-outline-success" style={{}}>{this.state.value}</button>
        <input type="range"
          onChange={this.onChange}
          min={minValue}
          max={maxValue}
          value={this.state.value}
          className="slider"
          id="myRange" />
      </div>

    )
  }
}

Slider.defaultProps = {
  minValue: 0,
  maxValue: 10,
  value: 5,
  onChange: ()=>{}
}
