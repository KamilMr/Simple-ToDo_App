import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input } from '@theme-ui/components';

const SearchView = ({ searchQuery, setSearchQuery }) => {
    return (
        <Container sx={{maxWidth:['auto', 'auto', 800]}} >
            <Input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search tasks"
                name="s"
            />
        </Container>
    );
}

SearchView.propTypes = {
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
}
export default SearchView;