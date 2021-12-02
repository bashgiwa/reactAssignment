import React, { useState, createContext } from 'react';

//dont forget to remove fake data once network error is resolved
export const FilterOnSaleContext = createContext();

const FilterOnSaleContextProvider = (props) => {
  const [saleFlag, setSaleFlag ] = useState(false);

  return (
    <FilterOnSaleContext.Provider value={{saleFlag, setSaleFlag}} >
        {props.children}
    </FilterOnSaleContext.Provider>
  )
}

export default FilterOnSaleContextProvider;