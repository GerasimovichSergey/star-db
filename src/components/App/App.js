import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import './App.css';
import ErrorIndicator from '../ErrorIndicator';
import ApiService from '../../services/api-service';
import DummyApiService from '../../services/dummy-api-service';
import { Provider } from '../apiServiceContext';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages';
import { BrowserRouter, Route } from 'react-router-dom';


export default class App extends Component {
    state = {
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
    
    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    }
    
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        
        return (
            <Provider value={this.state.apiService}>
                <BrowserRouter>
                    <div className="container">
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet />
                        
                        <Route path="/people" component={PeoplePage} />
                        <Route path="/planets" component={PlanetsPage} />
                        <Route path="/starships" component={StarshipsPage} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}