import React, { Component } from 'react';
import { StarshipDetails, StarshipsList } from '../SwComponents';
import Row from '../Row';


export default class StarshipsPage extends Component {
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
            <Row left={<StarshipsList onItemSelected={this.onItemSelected} />}
                 right={<StarshipDetails itemId={this.state.selectedItem} />}
            />
        );
    }
}