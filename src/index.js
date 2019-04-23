import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button
      className="squareButton"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
}

// const App = () => {
//   return <Square value={1} />;
// };

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  renderSquares(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  render() {
    const status = "Next Player : " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="displayBoard">
          {status}
          <div className="rowBreak">
            {this.renderSquares(0)}
            {this.renderSquares(1)}
            {this.renderSquares(2)}
          </div>
          <div className="rowBreak">
            {this.renderSquares(3)}
            {this.renderSquares(4)}
            {this.renderSquares(5)}
          </div>
          <div className="rowBreak">
            {this.renderSquares(6)}
            {this.renderSquares(7)}
            {this.renderSquares(8)}
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
