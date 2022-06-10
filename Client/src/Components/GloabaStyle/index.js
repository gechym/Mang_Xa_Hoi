import './globalStyles.scss';
import PropTypes from 'prop-types';
import React from 'react';

const GlobalStyle = ({ children }) => {
    return React.Children.only(children);
};

GlobalStyle.propTypes = {
    children : PropTypes.node.isRequired
}

export default GlobalStyle;
