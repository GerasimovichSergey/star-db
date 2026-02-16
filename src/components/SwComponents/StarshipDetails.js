import React from 'react';
import { Record } from '../ItemDetails/ItemDetails';
import ItemDetails from '../ItemDetails';
import { withApiService } from '../hoc-helpers';


const StarshipDetails = (props) => {
    const { itemId, getData, getImageUrl } = props;
    
    return (
        <ItemDetails
            itemId={itemId}
            getData={getData}
            getImageUrl={getImageUrl}
        >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );
};

const mapMethodToProps = (apiService) => {
    return {
        getData: apiService.getStarship,
        getImageUrl: apiService.getStarshipImage,
    }
};


export default withApiService(mapMethodToProps)(StarshipDetails);