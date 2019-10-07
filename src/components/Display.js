import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h4>{this.props.content}</h4>
            </div>
        );
    }
}

Display.propTypes = {

};

export default Display;