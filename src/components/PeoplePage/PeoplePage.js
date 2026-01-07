import React, { Component } from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';


export default class    PeoplePage extends Component {
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
        
        return (
            <div className="row">
                <div className="col-md-6 mb-4">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
}