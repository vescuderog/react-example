import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

const InitState = 0;
const FirstFigureState = 1;
const SecondFigureState = 2;
const ResultState = 3;

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = { display: '' };
        this.currentState = InitState;
        this.FirstFigure = 0;
        this.SecondFigure = 0;
        this.operator = '';
        this.result = 0;
    }

    handleNumber(num) {
        switch (this.currentState) {
            case InitState:
                this.FirstFigure = num;
                this.currentState = FirstFigureState;
                this.setState({ display: num })
                break;
            case FirstFigureState:
                this.FirstFigure = this.FirstFigure * 10 + num;
                this.setState({ display: String(this.state.display) + num })
                break;
            case SecondFigureState:
                this.SecondFigure = this.SecondFigure * 10 + num;
                this.setState({ display: this.state.display + num })
                break;
            case ResultState:
                this.FirstFigure = num;
                this.SecondFigure = 0;
                this.operator = '';
                this.result = 0;
                this.currentState = FirstFigureState;
                this.setState({ display: num })
                break;
            default:
                break;
        }
    }

    isOperator(symbol) {
        if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
            return true;
        } else {
            return false;
        }
    }

    resolve() {
        switch (this.operator) {
            case '+':
                return this.FirstFigure + this.SecondFigure;
            case '-':
                return this.FirstFigure - this.SecondFigure;
            case '*':
                return this.FirstFigure * this.SecondFigure;
            case '/':
                return this.FirstFigure / this.SecondFigure;
            default:
                break;
        }
    }

    handleSymbol(symbol) {
        switch (this.currentState) {
            case InitState:

                break;
            case FirstFigureState:
                if (this.isOperator(symbol)) {
                    this.operator = symbol;
                    this.currentState = SecondFigureState;
                    this.setState({ display: this.state.display + symbol })
                }
                break;
            case SecondFigureState:
                if (symbol === '=') {
                    this.result = this.resolve();
                    this.currentState = ResultState;
                    this.setState({ display: this.state.display + '=' + this.result })
                }
                break;
            case ResultState:
                if (this.isOperator(symbol)) {
                    this.FirstFigure = this.result;
                    this.SecondFigure = 0;
                    this.operator = symbol;
                    this.result = 0;
                    this.currentState = SecondFigureState;
                    this.setState({ display: this.FirstFigure + symbol })
                }
                break;
            default:
                break;
        }
    }

    handleSignal(value) {
        if (typeof value === 'string') {
            this.handleSymbol(value);
        } else if (typeof value === 'number') {
            this.handleNumber(value);
        }
    }

    render() {
        return (
            <div>
                <Display content={this.state.display}></Display>
                <Keyboard signal={(value) => this.handleSignal(value)}></Keyboard>
            </div>
        );
    }
}

export default Calculator;