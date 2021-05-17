import React from 'react';
import PropTypes from 'prop-types';

const SearchView = ({ searchQuery, setSearchQuery }) => {
    return (
        <div >
        
            <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s"
            />
        </div>
    );
}

SearchView.propTypes = {
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func,
}
export default SearchView;