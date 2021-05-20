/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeProvider, Container, Heading } from 'theme-ui'
import theme from '@hackclub/theme'
import PropTypes from 'prop-types';
import Header from '../Header/Header'

const MainLayout = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <Header /> */}
                <Container sx={{ display: 'grid' }}>
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