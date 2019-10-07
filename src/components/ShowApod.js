import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import PropTypes from 'prop-types';

class ShowApod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {date: moment(new Date()).format("YYYY-MM-DD")},
        };
    }

    request(url = 'https://api.nasa.gov/planetary/apod?api_key=mJfxsF36E4qA20dKbeEuGYWQm6NJb3yLA7ZTnQhH') {
        fetch(url).then((response) => {
            return response.json();
        }).then((myJson) => {
            // console.log(JSON.stringify(myJson));
            this.setState({response: myJson})
        });
    }

    componentWillMount() {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=mJfxsF36E4qA20dKbeEuGYWQm6NJb3yLA7ZTnQhH&date='
         + this.props.date;
        // console.log(url);
        this.request(url)
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=mJfxsF36E4qA20dKbeEuGYWQm6NJb3yLA7ZTnQhH&date='
         + nextProps.date;
        console.log(url);
        this.request(url)
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
        return (
            <div>
                <div className="container" style={{marginTop: '20px', marginBottom: '20px'}}>
                    <Card bg="dark" text="white" >
                        <Card.Img variant="top" src={this.state.response.url} />
                        <Card.Body>
                            <Card.Title>{this.state.response.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{this.state.response.date}</Card.Subtitle>
                            <Card.Text>
                                {this.state.response.explanation}
                            </Card.Text>
                            <Button variant="info" href="https://apod.nasa.gov/apod/archivepix.html">
                                Go Apod archive
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Service version: {this.state.response.service_version}</small>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        );
    }
}

ShowApod.propTypes = {

};

export default ShowApod;