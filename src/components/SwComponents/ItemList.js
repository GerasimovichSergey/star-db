import React from 'react';
import ItemList from '../ItemList';
import { WithData, withApiService } from '../hoc-helpers';


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>)
    };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

const mapPersonMethodToProps = (apiService) => {
    return {
        getData: apiService.getAllPeople,
    }
};

const mapPlanetMethodToProps = (apiService) => {
    return {
        getData: apiService.getAllPlanets,
    }
};

const mapStarshipMethodToProps = (apiService) => {
    return {
        getData: apiService.getAllStarships,
    }
};

export const PersonList = withApiService(WithData(withChildFunction(ItemList, renderName)), mapPersonMethodToProps);
export const PlanetList = withApiService(WithData(withChildFunction(ItemList, renderName)), mapPlanetMethodToProps);
export const StarshipList = withApiService(WithData(withChildFunction(ItemList, renderModelAndName)), mapStarshipMethodToProps);