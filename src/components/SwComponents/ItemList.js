import React from 'react';
import ItemList from '../ItemList';
import withData from '../hoc-helpers/WithData';
import ApiService from '../../services/api-service';


const apiService = new ApiService();
const { getAllPeople, getAllStarships, getAllPlanets } = apiService;

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

export const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
export const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);
export const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarships);