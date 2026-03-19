import React from 'react';
import { PersonsList, PersonDetails } from '../SwComponents';
import { withRouter } from 'react-router-dom';
import Row from '../Row';


const PeoplePage = ({ history, match }) => {
    const { id } = match.params;
    
    return (
        <Row left={<PersonsList onItemSelected={(id) => history.push(id)} />}
             right={<PersonDetails itemId={id} />}
        />
    );
};


export default withRouter(PeoplePage);