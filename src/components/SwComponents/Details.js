import React from 'react';
import ApiService from '../../services/api-service';
import { Record } from '../ItemDetails/ItemDetails';
import ItemDetails from '../ItemDetails';


const apiService = new ApiService();
const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = apiService;

export const PersonDetails = (props) => {
    const { itemId } = props;
    
    return (
        <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
};

export const PlanetDetails = (props) => {
    const { itemId } = props;
    
    return (
        <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diametr" label="Diametr" />
        </ItemDetails>
    );
};

export const StarshipDetails = (props) => {
    const { itemId } = props;
    
    return (
        <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>);
};