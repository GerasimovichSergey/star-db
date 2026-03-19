import React from 'react';
import { StarshipsList } from '../SwComponents';
import { withRouter } from 'react-router-dom';


const StarshipsPage = ({ history }) => {
    return (
        <StarshipsList onItemSelected={(itemId) => {
            history.push(`/starships/${itemId}`);
        }} />
    );
};


export default withRouter(StarshipsPage);