import React, { Component } from 'react';
import { PlanetsList, PlanetDetails } from '../SwComponents';
import Row from '../Row';


export default class PlanetsPage extends Component {
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
            <Row left={<PlanetsList onItemSelected={this.onItemSelected} />}
                 right={<PlanetDetails itemId={this.state.selectedItem} />}
            />
        );
    }
}