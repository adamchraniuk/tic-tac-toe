import React, {Component} from 'react';
import Game from './Game/Game'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Setup from './Game/Setup';

class App extends Component {
    constructor() {
        super();

        this.state = {
            hasStarted: false,
            pOneName: '',
            pTwoName: ''
        };
    }

    setupGame = (pOneName, pTwoName, callback) => {
        this.setState({
            pOneName,
            pTwoName,
            hasStarted: true,
        }, callback);

    };

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route path="/"
                               exact
                               render={(props) => <Setup
                                   onSubmit={this.setupGame}
                                   history={props.history}
                               />}/>
                        <Route path="/game"
                               exact
                               render={({history}) => <Game
                                   hasStarted={this.state.hasStarted}
                                   history={history}
                                   playerOne={this.state.pOneName}
                                   playerTwo={this.state.pTwoName}
                               />}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
