import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import ApiService from '../../services/api-service';
import Row from '../Row';


export default class PeoplePage extends Component {
    apiService = new ApiService();
    
    state = {
        selectedPerson: null,
        hasError: false,
    }
    
    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    }
    
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.apiService.getAllPeople}
                renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
            />
        );
        
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );
        
        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}