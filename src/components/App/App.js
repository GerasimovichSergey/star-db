import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import './App.css';
import ErrorIndicator from '../ErrorIndicator';
import ItemDetails from '../ItemDetails';
import ApiService from '../../services/api-service';
import DummyApiService from '../../services/dummy-api-service';
import { Record } from '../ItemDetails/ItemDetails';
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../SwComponents';
import { Provider } from '../apiServiceContext';


export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false,
        apiService: new ApiService(),
    }
    
    onServiceChange = () => {
        this.setState((prevState) => {
            const { apiService } = prevState;
            
            const Service = apiService instanceof ApiService ? DummyApiService : ApiService;
            
            return {
                apiService: new Service(),
            }
        });
    };
    
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
        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
        } = this.state.apiService;
        
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        const personDetails =
            <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        const starshipDetails =
            <ItemDetails itemId={5} getData={getStarship}
                         getImageUrl={getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        
        
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        
        return (
            <Provider value={this.state.apiService}>
                <div className="container">
                    <Header onServiceChange={this.onServiceChange} />
                    
                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />
                    
                    <PersonList />
                    <StarshipList />
                    <PlanetList />
                </div>
            </Provider>
        );
    }
}