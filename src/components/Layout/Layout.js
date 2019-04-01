
import React from 'react';
import NavBar from '../NavBar/NavBar';

export default (props) => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="container mt-4">
                {props.children}
            </div>
        </React.Fragment>
    );
};