import React from 'react';
import { Container, Heading } from 'theme-ui';

const Header = () => {
    return (
        <Container sx={{
            maxWidth: 'container',
            textAlign: 'center',
            py: [3, 4],
            px: 3
        }}>
            
            <Heading sx={{ color: 'secondary' }} >Things To Do</Heading>
        </Container>
    );
}

export default Header;