import React from 'react';
import './Row.css';


const Row = (props) => {
    const { left, right } = props;
    
    return (
        <div className="row">
            <div className="col-md-6 mb-4">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
};


export default Row;