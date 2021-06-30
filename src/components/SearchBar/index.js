import React from 'react';
import { SearchContainer, SearchWrap, SearchBtn } from './searchElements';


const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchWrap>
                <input type="text" placeholder="Search for product..." />
                <SearchBtn>Search</SearchBtn>
            </SearchWrap>
        </SearchContainer> 
    )
}

export default SearchBar;
