import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return <button className="squareButton">{this.props.value} </button>;
  }
}

// const App = () => {
//   return <Square value={1} />;
// };

class Board extends React.Component {
  renderSquares(i) {
    return <Square value={i} />;
  }

  render() {
    return (
      <div className="displayBoard">
        <div className="rowBreak">
          {this.renderSquares(1)}
          {this.renderSquares(2)}
          {this.renderSquares(3)}
        </div>
        <div className="rowBreak">
          {this.renderSquares(4)}
          {this.renderSquares(5)}
          {this.renderSquares(6)}
        </div>
        <div className="rowBreak">
          {this.renderSquares(7)}
          {this.renderSquares(8)}
          {this.renderSquares(9)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
