import React from 'react';
import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import RandomPlanet from '../RandomPlanet';
import './App.css';


const App = () => {
    return (
        <div className="container">
            <Header />
            <RandomPlanet />
            <div className="row">
                <div className="col-md-6 mb-4">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
}


export default App;