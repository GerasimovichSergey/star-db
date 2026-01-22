import React, { Component } from 'react';
import './ItemDetails.css';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton/ErrorButton';


export const Record = (props) => {
    const { item, field, label } = props;
    
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: false,
        image: null,
    }
    
    componentDidMount() {
        this.updateItem();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData || this.props.getImageUrl !== prevProps.getImageUrl) {
            this.setState({ loading: true });
            this.updateItem();
        }
    }
    
    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        
        if (!itemId) {
            return;
        }
        
        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false,
                    image: getImageUrl(item),
                })
            })
    }
    
    render() {
        const { item, loading, image } = this.state;
        
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
        
        const { name } = this.state.item;
        
        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image} alt={name} />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })}
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        );
    }
}