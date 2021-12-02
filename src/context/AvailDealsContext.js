import React, { useState, createContext } from 'react';

//dont forget to remove fake data once network error is resolved
export const DealsContext = createContext();

const DealsContextProvider = (props) => {
  const [dealData, setDealData ] = useState([]);

  return (
    <DealsContext.Provider value={{ dealData, setDealData }} >
        {props.children}
    </DealsContext.Provider>
  )
}

export default DealsContextProvider;