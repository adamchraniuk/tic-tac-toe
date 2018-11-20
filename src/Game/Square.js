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
        const {
            value,
            handleClick
        } = this.props;
        return (
            <div className="square"
                 onClick={() => handleClick()}>
                {value}
            </div>
        );
    }

}

export default Square