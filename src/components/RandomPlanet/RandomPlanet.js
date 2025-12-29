import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import './RandomPlanet.css';
import Spinner from '../Spinner';


export default class RandomPlanet extends Component {
    apiService = new ApiService();
    
    state = {
        planet: {},
        loading: true,
    }
    
    constructor() {
        super();
        this.updatePlanet();
    }
    
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
        });
    }
    
    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        
        this.apiService.getPlanet(id)
            .then((result) => this.onPlanetLoaded(result));
    }
    
    render() {
        const { planet, loading } = this.state;
        
        const spinner = loading ? <Spinner /> : null;
        const mainContent = !loading ? <PlanetView planet={planet} /> : null;
        
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {mainContent}
            </div>
        );
    }
}

const PlanetView = (props) => {
    const { id, name, population, rotationPeriod, diameter } = props.planet;
    
    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt={`Planet: ${name}`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};