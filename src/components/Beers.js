import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';

import 'react-input-range/lib/css/index.css'

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBeers: []
        };
        this.value = { min: 0, max: 20 }
        this.response = [];
    }

    request(url = 'https://api.punkapi.com/v2/beers') {
        fetch(url).then((response) => {
            return response.json();
        }).then((myJson) => {
            // console.log(JSON.stringify(myJson));
            this.response = myJson;
            this.updateList();
        });
    }

    updateList() {
        let list = [];
        for (const beer of this.response) {
            if (beer.abv >= this.value.min && beer.abv <= this.value.max) {
                list.push(beer);
            }
        }
        this.setState({listBeers: list});
    }

    componentWillMount() {
        this.request()
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
        const listBeers = this.state.listBeers.map(
            (beer, i) => (
            <Card bg="light" border="success" key={i}>
                <div className = "text-center">
                    <Card.Img variant="top" src={beer.image_url} style={{width: '50px', margin: '10px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{beer.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{beer.tagline}</Card.Subtitle>
                    <Card.Text>
                        {beer.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">ABV: {beer.abv}</small>
                </Card.Footer>
            </Card>))

        return (
            <div>
                <div className="container" style={{marginTop: '20px', marginBottom: '20px'}}>
                    <InputRange
                        maxValue={20}
                        minValue={0}
                        value={this.value}
                        onChange={value => {this.value = value; this.updateList()}} />
                </div>
                <div className="container" style={{marginTop: '20px', marginBottom: '20px'}}>
                    <CardColumns>
                        {listBeers}
                    </CardColumns>
                </div>
            </div>
        );
    }
}

Beers.propTypes = {

};

export default Beers;