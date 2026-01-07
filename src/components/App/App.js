import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import './App.css';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorButton from '../ErrorButton/ErrorButton';
import ErrorIndicator from '../ErrorIndicator';


export default class App extends Component {
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
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
}