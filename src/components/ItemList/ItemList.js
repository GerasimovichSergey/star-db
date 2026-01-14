import React from 'react';
import './ItemList.css';


const ItemList = (props) => {
    const { data, onItemSelected } = props;
    
    const items = data.map((item) => {
        const label = props.children(item);
        
        return (
            <li key={item.id} className="list-group-item" onClick={() => onItemSelected(item.id)}>
                {label}
            </li>
        );
    });
    
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}


export default ItemList;