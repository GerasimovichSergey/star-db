import React, { Component } from 'react';
import './PersonDetails.css';
import ApiService from '../../services/api-service';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton/ErrorButton';


export default class PersonDetails extends Component {
    apiService = new ApiService();
    
    state = {
        person: null,
        loading: false,
    }
    
    componentDidMount() {
        this.updatePerson();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({ loading: true });
            this.updatePerson();
        }
    }
    
    updatePerson() {
        const { personId } = this.props;
        
        if (!personId) {
            return;
        }
        
        this.apiService.getPerson(personId)
            .then((person) => {
                this.setState({
                    person: person,
                    loading: false,
                })
            })
    }
    
    render() {
        const { person, loading } = this.state;
        
        if (!person && !loading) {
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
        const { id, name, gender, birthYear, eyeColor } = this.state.person;
        
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