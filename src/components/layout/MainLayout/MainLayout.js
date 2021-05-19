/** @jsxImportSource theme-ui */
import React from 'react';
import { Themed, ThemeProvider, Container, Box } from 'theme-ui'
import theme from '@hackclub/theme'
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box >Things To Do</Box>
                <Container>
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