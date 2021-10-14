import React, { useState, createContext } from 'react';

export const SearchTermContext = createContext();

function SearchTermContextProvider({ children }) {
  const [search, setSearch] = useState('');

  const setSearchTerm = (userInput) => {
    setSearch(userInput);
  };

  return (
    <SearchTermContext.Provider value={{ search, setSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
}

export default SearchTermContextProvider;
