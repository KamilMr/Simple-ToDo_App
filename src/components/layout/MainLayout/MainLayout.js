/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeProvider, Container, Heading } from 'theme-ui'
import theme from '@hackclub/theme'
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                    <Container sx={{ display: 'grid', height:'100%'}}>
                        {children}
                    </Container>
            </ThemeProvider>
        </>
    );
}

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.node,
}