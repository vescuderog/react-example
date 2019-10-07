import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import CardModel from '../model/CardModel';
import CardComponent from './CardComponent';
import PropTypes from 'prop-types';

class Trivial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    request(url = 'https://opentdb.com/api.php?amount=10') {
        fetch(url).then((response) => {
            return response.json();
        }).then((myJson) => {
            console.log(JSON.stringify(myJson));
            this.response = myJson;
            this.updateList();
        });
    }

    updateList() {
        let list = [];
        for (const card of this.response.results) {
            list.push(new CardModel(card));
        }
        this.setState({cards: list});
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
        const listCards = this.state.cards.map(
            (card, i) => (
            <CardComponent card={card} key={i}></CardComponent>))

        return (
            <div>
                <div className="container" style={{marginTop: '20px', marginBottom: '20px'}}>
                    <CardColumns>
                        {listCards}
                    </CardColumns>
                </div>
            </div>
        );
    }
}

Trivial.propTypes = {

};

export default Trivial;