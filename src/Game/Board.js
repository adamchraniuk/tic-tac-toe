import React, {Component, Fragment} from 'react';
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
        this.state.counter % 2 === 0 ? squares[i] = 'X' : squares[i] = 'O';
        this.setState({
            squares: squares,
            counter: this.state.counter + 1
        });
        console.log(squares)
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       handleClick={() => this.handleClick(i)}/>;
    }

    render() {
        const {
            playerOne,
            playerTwo
        } = this.props;
        const {
            counter,
            squares
        } = this.state;

        const status = `Player: ${counter % 2 === 0 ? playerOne : playerTwo}`;

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