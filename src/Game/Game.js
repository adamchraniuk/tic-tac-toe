import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Board from "./Board";


class Game extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {
            playerOne,
            playerTwo,
            history
        } = this.props;

        return (
               <Board
               playerOne={playerOne}
               playerTwo={playerTwo}
               historyBack={history}/>
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