import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Square from './Square';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            counter: 0
        }
    }

    handleClick(i) {

        const squares = this.state.squares.slice();
        if (this.state.counter % 2 === 0) {
            squares[i] = 'X';
        }
        else {
            squares[i] = 'O';
        }
        this.setState({
            squares: squares,
            counter: this.state.counter + 1
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       handleClick={() => this.handleClick(i)}/>;
    }

    render() {
        const status = `Next player: ${this.state.squares}`;

        return (
            <div>
                <h2 className="status">{status}</h2>
                {this.state.squares.map((square, index) => {
                    return (
                        <div key={index}>
                            {this.renderSquare(index)}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Board