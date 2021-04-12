import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import {toast} from 'react-toastify';


export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = false;

    if (!signed && isPrivate) {
        toast.error('Resource available only for logged users.');
        return <Redirect to='/' />
    }

    if (signed && !isPrivate) {
        toast.error('Login successfull.');
        return <Redirect to ='/dashboard' />
    }

    return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}