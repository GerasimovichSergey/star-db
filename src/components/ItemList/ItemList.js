import React, { Component } from 'react';
import './ItemList.css';
import ApiService from '../../services/api-service';
import Spinner from '../Spinner';


export default class ItemList extends Component {
    apiService = new ApiService();
    
    state = {
        peopleList: null,
    }
    
    componentDidMount() {
        this.apiService.getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList: peopleList,
                })
            })
        
    }
    
    renderItems(arr) {
        return arr.map((person) => {
            return (
                <li key={person.id} className="list-group-item" onClick={() => this.props.onItemSelected(person.id)}>
                    {person.name}
                </li>
            );
        });
    }
    
    render() {
        const { peopleList } = this.state;
        
        if (!peopleList) {
            return <Spinner />
        }
        
        const people = this.renderItems(peopleList);
        
        return (
            <ul className="item-list list-group">
                {people}
            </ul>
        );
    }
}