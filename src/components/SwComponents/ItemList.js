import React from 'react';
import ItemList from '../ItemList';
import withData from '../hoc-helpers/WithData';
import ApiService from '../../services/api-service';


const apiService = new ApiService();
const { getAllPeople, getAllStarships, getAllPlanets } = apiService;

export const PersonList = withData(ItemList, getAllPeople);
export const PlanetList = withData(ItemList, getAllPlanets);
export const StarshipList = withData(ItemList, getAllStarships);