import React, { useState, createContext } from 'react';

const fakeData = [
  {
    dealID: "1",
    name: "Chair book",
    descr: "this is a chair book"
},
{
    dealID: "2",
    name: "table book",
    desc: "this is a table book"
},
]

export const DealsContext = createContext();

const DealsContextProvider = (props) => {
  const [dealData, setDealData ] = useState(fakeData);

  return (
    <DealsContext.Provider value={{dealData, setDealData}} >
        {props.children}
    </DealsContext.Provider>
  )
}

export default DealsContextProvider;