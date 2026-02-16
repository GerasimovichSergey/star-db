import React from 'react';
import PropTypes from 'prop-types';
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

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
};


export default Row;