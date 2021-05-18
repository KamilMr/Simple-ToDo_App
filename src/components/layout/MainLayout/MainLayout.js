import React from 'react';
import { ThemeProvider } from 'theme-ui'
import theme from '../../../styles/theme'
import PropTypes from 'prop-types';

const MainLayout = (props) => {
    return (
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    );
}

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.node,
}