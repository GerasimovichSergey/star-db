import React, { Component } from 'react';
import './ItemDetails.css';
import ApiService from '../../services/api-service';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton/ErrorButton';


export default class ItemDetails extends Component {
    apiService = new ApiService();
    
    state = {
        item: null,
        loading: false,
    }
    
    componentDidMount() {
        this.updatePerson();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({ loading: true });
            this.updatePerson();
        }
    }
    
    updatePerson() {
        const { itemId } = this.props;
        
        if (!itemId) {
            return;
        }
        
        this.apiService.getPerson(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false,
                })
            })
    }
    
    render() {
        const { item, loading } = this.state;
        
        if (!item && !loading) {
            return (
                <div className="person-details card">
                    <span>Select a person from a list</span>
                </div>
            );
        }
        
        if (loading) {
            return (
                <div className="person-details card">
                    <Spinner />
                </div>
            );
        }
        const { id, name, gender, birthYear, eyeColor } = this.state.item;
        
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name} />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        );
    }
}