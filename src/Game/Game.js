import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Board from "./Board";


class Game extends Component {
    render() {
        const {
            playerOne,
            playerTwo
        } = this.props;

        return (
               <Board
               playerOne={playerOne}
               playerTwo={playerTwo}/>
        )
    }

}

Game.propTypes = {
    hasStarted: PropTypes.bool,
    history: PropTypes.object,
    playerOne: PropTypes.string,
    playerTwo: PropTypes.string
};

export default Game;