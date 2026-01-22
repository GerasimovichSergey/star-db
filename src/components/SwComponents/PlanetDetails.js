import React from 'react';
import { Record } from '../ItemDetails/ItemDetails';
import ItemDetails from '../ItemDetails';
import { withApiService } from '../hoc-helpers';


const PlanetDetails = (props) => {
    const { itemId, getData, getImageUrl } = props;
    
    return (
        <ItemDetails
            itemId={itemId}
            getData={getData}
            getImageUrl={getImageUrl}
        >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diametr" label="Diametr" />
        </ItemDetails>
    );
};

const mapMethodToProps = (apiService) => {
    return {
        getData: apiService.getPlanet,
        getImageUrl: apiService.getPlanetImage,
    }
};


export default withApiService(PlanetDetails, mapMethodToProps);