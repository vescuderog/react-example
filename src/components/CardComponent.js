import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({card: this.props.card})
    }

    componentWillMount() {

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

    handleClick(index) {
        let myCard = this.state.card;
        myCard.answered = true;
        myCard.rightAnswered = (myCard.answers[index] === myCard.correctAnswer)
        this.setState({card: myCard})
    }

    getClass(index) {
        let myCard = this.state.card;
        let isCorrect = false;
        if (myCard.answers[index] === myCard.correctAnswer) {
            isCorrect = true;
        }
        return isCorrect ? 'btn-block btn-success': 'btn-block btn-secondary';
    }

    render() {
        let buttons = <div></div>;
        if (this.state.card.answered) {
            buttons = this.state.card.answers.map((answer, i) => 
            <Button className={this.getClass(i)} key={i} id={i} disabled>
                {answer}
            </Button>)
        } else {
            buttons = this.state.card.answers.map((answer, i) => 
            <Button variant="info" className="btn-block" key={i} id={i} 
            onClick={(i) => this.handleClick(i)} >
                {answer}
            </Button>)
        }

        return (
            <div>
                <Card bg="light" border="info" >
                    <Card.Body>
                        <Card.Title>{this.state.card.question}</Card.Title>
                        <Card.Text>
                            {buttons}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

CardComponent.propTypes = {

};

export default CardComponent;