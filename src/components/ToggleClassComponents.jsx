import { Component } from "react";

class ClassBasedComponents extends Component {
  state = {
    showText: true,
    changeColor: false,
  };

  handleClick = () => {
    this.setState({
      showText: !this.state.showText,
    });
  };
  handleColor = () => {
    this.setState({
      changeColor: !this.state.changeColor,
    });
  };
  render() {
    const { showText, changeColor } = this.state;
    console.log(showText);
    return (
      <>
        {/* {showText && <h1>Class Based Components</h1>} */}
        {showText ? (
          <h1 style={{ color: changeColor && "red" }}>
            Class Based Components
          </h1>
        ) : null}
        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleColor}>Toggle Color</button>
      </>
    );
  }
}

export default ClassBasedComponents;
