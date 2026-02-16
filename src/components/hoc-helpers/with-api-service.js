import React from 'react';
import { Consumer } from '../apiServiceContext';


const withApiService = (mapMethodToProps) => (Wrapped) => {
    return (props) => {
        return (
            <Consumer>
                {
                    (apiService) => {
                        const serviceProps = mapMethodToProps(apiService);
                        
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </Consumer>
        );
    }
};


export default withApiService;