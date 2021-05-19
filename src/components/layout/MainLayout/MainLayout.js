/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeProvider, Container, Heading } from 'theme-ui'
import theme from '@hackclub/theme'
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container as='header' sx={{
                    maxWidth: 'container',
                    bg: 'secondary',
                    textAlign: 'center',
                    py: [3,4],
                    px:3
                }}>
                    <Heading  sx={{
                        color: 'snow',
                    }} >Things To Do</Heading>
                </Container>

                <Container sx={{display: 'grid', width: 350}}>
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