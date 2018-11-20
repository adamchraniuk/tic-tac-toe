import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Square from './Square';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };

    }

    handleClick(i) {

        const squares = this.state.squares.slice();
        if (squares[i] === null) {
            squares[i] = this.state.xIsNext ? 'X' : 'O';
        }
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
        console.log(squares[i],this.state.counter)
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       handleClick={() => this.handleClick(i)}/>;
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const {
            playerOne,
            playerTwo
        } = this.props;
        const {
            xIsNext,
            squares
        } = this.state;

        const winner = this.calculateWinner(squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
            alert(status);
            this.props.historyBack.push('/');
        } else {
            status = 'Next player: ' + (xIsNext ? playerOne : playerTwo);
        }

        return (
            <div className="board">

                <h2 className="status">{status}</h2>
                {squares.map((square, index) => {
                    return (
                        <Fragment key={index}>
                            {this.renderSquare(index)}
                        </Fragment>
                    )
                })}
            </div>
        );
    }
}

Board.propTypes = {
    playerOne: PropTypes.string,
    playerTwo: PropTypes.string
};
export default Board