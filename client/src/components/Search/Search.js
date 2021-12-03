import React, { useState, useContext} from "react";
import { DealsContext } from "../../context/AvailDealsContext";

import './Search.css';

const SearchBar = () => {
  
  const {dealData, setDealData} = useContext(DealsContext);
  
  const searchByTitle = (query) => {
    const matches = [];
      if(query === ''){
        setDealData([]);
      }
      else {
        dealData.forEach((deal) => {
          if(deal.title.toLowerCase().includes(query.toLowerCase())){
            matches.push(deal);
          }
        });
        if(matches.length > 0) setDealData(matches);     
      }
  }
  return (
    <div className="sub-section">
      <span className="search-title">Deals</span>
      <input type="text" className="search" placeholder="  Search deals by name" onChange={(e) => searchByTitle(e.target.value)} />
    </div>
  )
}

export default SearchBar;