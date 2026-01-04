import React, { Component } from 'react';
import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import RandomPlanet from '../RandomPlanet';
import './App.css';


export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: null,
    }
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    }
    
    render() {
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}