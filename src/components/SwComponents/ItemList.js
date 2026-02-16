import React from 'react';
import ItemList from '../ItemList';
import { WithData, withApiService, compose, withChildFunction } from '../hoc-helpers';


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

export const PersonsList = compose(
    withApiService(mapPersonMethodToProps),
    WithData,
    withChildFunction(renderName)
)(ItemList);

export const PlanetsList = compose(
    withApiService(mapPlanetMethodToProps),
    WithData,
    withChildFunction(renderName)
)(ItemList);

export const StarshipsList = compose(
    withApiService(mapStarshipMethodToProps),
    WithData,
    withChildFunction(renderModelAndName)
)(ItemList);