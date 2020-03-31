import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const signed = true;

    if(!signed && isPrivate){
        return <Redirect to="/" />
    }

    if(signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }

    return (
        <Route
            {...rest}
            component={Component}
        />
    );
}

RouterWrapper.propTypes = {
    isPrivate: propTypes.bool,
    component: propTypes.oneOfType([propTypes.element, propTypes.func])
};

RouterWrapper.defaultProps = {
    isPrivate: false
};
