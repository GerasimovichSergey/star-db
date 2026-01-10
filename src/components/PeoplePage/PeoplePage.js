import React, { Component } from 'react';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorIndicator from '../ErrorIndicator';
import ApiService from '../../services/api-service';
import Row from '../Row';
import './PeoplePage.css';
import ErrorBoundary from '../ErrorBoundary';


export default class PeoplePage extends Component {
    apiService = new ApiService();
    
    state = {
        selectedPerson: null,
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
            >
                {(item) => `${item.name} (${item.gender})`}
            </ItemList>
        );
        
        const personDetails = (
            <ErrorBoundary>
                <ItemDetails itemId={this.state.selectedPerson} />
            </ErrorBoundary>
        );
        
        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}