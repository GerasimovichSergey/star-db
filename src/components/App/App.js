import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import './App.css';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorButton from '../ErrorButton/ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ApiService from '../../services/api-service';


export default class App extends Component {
    apiService = new ApiService();
    
    state = {
        showRandomPlanet: true,
        hasError: false,
    }
    
    toggleRandomPlanet = () => {
        this.setState((prevState) => {
            return {
                showRandomPlanet: !prevState.showRandomPlanet,
            };
        })
    }
    
    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    }
    
    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        
        return (
            <div className="container">
                <Header />
                
                {planet}
                
                <div className="row mb2 button-row">
                    <button className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}
                    >Toggle random planet
                    </button>
                    <ErrorButton />
                </div>
                
                <PeoplePage />
                
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.apiService.getAllPlanets}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}