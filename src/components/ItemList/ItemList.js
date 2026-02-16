import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';
import itemList from './index';


const ItemList = (props) => {
    const { data, onItemSelected, children } = props;
    
    const items = data.map((item) => {
        const label = children(item);
        
        return (
            <li key={item.id} className="list-group-item" onClick={() => onItemSelected(item.id)}>
                {label}
            </li>
        );
    });
    
    ItemList.defaultProps = {
        onItemSelected: () => {
        },
    };
    
    itemList.propTypes = {
        onItemSelected: PropTypes.func,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        children: PropTypes.func.isRequired,
    }
    
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}


export default ItemList;