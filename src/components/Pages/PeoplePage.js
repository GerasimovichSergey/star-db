import React, { Component } from 'react';
import { PersonsList, PersonDetails } from '../SwComponents';
import Row from '../Row';


export default class PeoplePage extends Component {
    state = {
        selectedItem: null,
    };
    
    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem: selectedItem,
        })
    };
    
    render() {
        return (
            <Row left={<PersonsList onItemSelected={this.onItemSelected} />}
                 right={<PersonDetails itemId={this.state.selectedItem} />}
            />
        );
    }
}