import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Square from './Square';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: 'Player'
        }
    }


    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status = `Next player: ${this.state.player}`;

        return (
            <div>
                <h2 className="status">{status}</h2>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board