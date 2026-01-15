import React from 'react';
import { Record } from '../ItemDetails/ItemDetails';
import ItemDetails from '../ItemDetails';
import { Consumer } from '../apiServiceContext';


export const PersonDetails = (props) => {
    const { itemId } = props;
    
    return (
        <Consumer>
            {
                (apiService) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={apiService.getPerson}
                            getImageUrl={apiService.getPersonImage}
                        >
                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    );
                }
            }
        </Consumer>
    );
};

export const PlanetDetails = (props) => {
    const { itemId } = props;
    
    return (
        <Consumer>
            {
                (apiService) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={apiService.getPlanet}
                            getImageUrl={apiService.getPlanetImage}
                        >
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation Period" />
                            <Record field="diametr" label="Diametr" />
                        </ItemDetails>
                    );
                }
            }
        </Consumer>
    );
};

export const StarshipDetails = (props) => {
    const { itemId } = props;
    
    return (
        <Consumer>
            {
                (apiService) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={apiService.getStarship}
                            getImageUrl={apiService.getStarshipImage}
                        >
                            <Record field="model" label="Model" />
                            <Record field="length" label="Length" />
                            <Record field="costInCredits" label="Cost" />
                        </ItemDetails>
                    );
                }
            }
        </Consumer>
    );
};