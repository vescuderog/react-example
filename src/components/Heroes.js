import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Hero } from '../model/Hero';
import PropTypes from 'prop-types';

class Heroes extends Component {
    constructor(props) {
        super(props);

        this.heroes = [new Hero('Batman', 'Dark knight'),
            new Hero('Superman', 'Man of steel'),
            new Hero('Spiderman', 'Spidy')];

        this.state = {
            listHeros: this.updateList(),
            newHero: new Hero('', '')
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({newHero: new Hero(event.target.value, this.state.newHero.description)});
    }

    handleDescriptionChange(event) {
        this.setState({newHero: new Hero(this.state.newHero.name, event.target.value)});
    }

    handleSubmit(event) {
        this.heroes.push(this.state.newHero)
        this.setState({
                listHeros: this.updateList(),
                newHero: new Hero('', '')
        })
        event.preventDefault();
    }

    updateList () {
        return this.heroes.map(
            (hero, i) => <ListGroup.Item key={i}><b>{hero.name}</b>
            <br/>
            <p>{hero.description}</p></ListGroup.Item>)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="basic-url">Nuevo héroe:</label>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Nombre"
                            aria-label="Nombre"
                            aria-describedby="basic-addon2"
                            value={this.state.newHero.name} 
                            onChange={this.handleNameChange}/>

                        <FormControl
                            placeholder="Descripción"
                            aria-label="Descripción"
                            aria-describedby="basic-addon2"
                            value={this.state.newHero.description} 
                            onChange={this.handleDescriptionChange}/>

                        <Button variant="primary" type="submit">Añadir</Button>
                    </InputGroup>
                </form>

                <ListGroup>
                    {this.state.listHeros}
                </ListGroup>
            </div>
        );
    }
}

Heroes.propTypes = {

};

export default Heroes;