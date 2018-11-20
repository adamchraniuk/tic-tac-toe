import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div className="square"
                 onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </div>
        );
    }

}

Square.propTypes = {
    value: PropTypes.number
};
export default Square