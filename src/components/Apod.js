
import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import ShowApod from './ShowApod';
import PropTypes from 'prop-types';

import "react-datepicker/dist/react-datepicker.css";

class Apod extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date()
        };
    }

    componentWillMount() {

    }

    handleChange = date => {
       this.setState({startDate: date})
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        let myApod = <div></div>

        if (this.state.startDate !== undefined) {
            myApod = <ShowApod date = {moment(this.state.startDate).format("YYYY-MM-DD")}></ShowApod>
        } else {
            myApod = <p>Not date aviable</p>
        }

        return (
            <div>
                <div className="container" style={{marginTop: '20px', marginBottom: '20px'}}>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
                {myApod}
            </div>
        );
    }
}

Apod.propTypes = {

};

export default Apod;