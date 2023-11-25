import React from "react";
import Button from "../JSX/CounterButton";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      positionClicked: true,
      negativeClicked: false
    };
  }

  onClick(isPositive) {
    if (isPositive) {
      this.setState({ count: this.state.count + 1 });
    } else {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    }
  }
  

  render() {
    return (

      <div className="text-center p-2 rounded-xl md:w-40 ml-10 ">
      <div className="grid grid-cols-3  items-center justify-center ">
        <Button className="px-4 text-m"
          onClick={() => {
            this.onClick(true);
          }}>
          +
        </Button>
        <div className="count text-2xl col-span-1 ">{this.state.count}</div>
        <Button  className="px-4 text-s"
          onClick={() => {
            this.onClick(false);
          }} >
          -
        </Button>
      </div>
    </div>
    );
  }
}
