import React, { createContext, useContext, useState } from 'react';

// Context oluşturun
export const FilterContext = createContext();

// Context'in içinde kullanılacak bir Hook oluşturun
export const useFilterContext = () => {
  return useContext(FilterContext);
};

// Context Provider bileşeni
export const FilterProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);

  const updateFilteredData = (data) => {
    setFilteredData(data);
  };

  return (
    <FilterContext.Provider value={{ filteredData, updateFilteredData }}>
      {children}
    </FilterContext.Provider>
  );
};