import React, {useContext, useState, useEffect} from "react";
import { DealsContext } from "../../context/AvailDealsContext";

import './Search.css';

const SearchBar = () => {
  
  const {dealData, setDealData} = useContext(DealsContext);
  const [load, setLoad] = useState(false);
  const [ searches, setSearches ] = useState( dealData);

  const searchByTitle = (query) => {
    const matches = [];
      if(query === "" ){
        if(searches.length > 0)  setDealData(searches);   
      }
      else {
        dealData.forEach((deal) => {
          if(deal.title.toLowerCase().substring(0, query.length).includes(query.toLowerCase())){
            matches.push(deal);
          }
        });
        if(matches.length > 0) setDealData(matches);     
      }
  }

  useEffect(() => {
    const initSearch = () =>{
      if(!load && dealData && dealData.length > 0) {
        setSearches([...dealData]);
        setLoad(true);
      }
    }
    initSearch()
  } , [load, dealData])

  return (
    <div className="sub-section">
      <span className="search-title">Deals</span>
      <input type="text" className="search" placeholder="  Search deals by name" onChange={(e) => searchByTitle(e.target.value)} />
    </div>
  )
}

export default SearchBar;