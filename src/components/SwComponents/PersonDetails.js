import React from 'react';
import { Record } from '../ItemDetails/ItemDetails';
import ItemDetails from '../ItemDetails';
import { withApiService } from '../hoc-helpers';


const PersonDetails = (props) => {
    const { itemId, getData, getImageUrl } = props;
    
    return (
        <ItemDetails
            itemId={itemId}
            getData={getData}
            getImageUrl={getImageUrl}
        >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
};

const mapMethodToProps = (apiService) => {
    return {
        getData: apiService.getPerson,
        getImageUrl: apiService.getPersonImage,
    }
};


export default withApiService(mapMethodToProps)(PersonDetails);