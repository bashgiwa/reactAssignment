import React, { useState, useContext} from "react";
import { DealsContext } from "../../context/AvailDealsContext";

import './Search.css';

const DealCheck = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { dealData, setDealData } = useContext(DealsContext);

  const handleOnChecked =() => {
    setIsChecked(!isChecked);
    if(!isChecked){
      filterByOnSale();
    }
  }

  const filterByOnSale = () => {
    const saleItems = dealData.filter(deal => deal.isOnSale === "1")
    if(saleItems.length > 0)setDealData(saleItems);
  }

  return (
    <div>
      <div className="sub-section">
        <div className="drop-down-header">
          <span className="drop-down-title">Filters</span>
        </div>
      </div>
      <div className="sub-section">
        <span>On Sale</span>
        <input type="checkbox" className="isChecked"
        id="filterByOnSale" 
        name="filterByOnSale" 
        value="On Sale"
        checked={isChecked}
        onChange={handleOnChecked}
        ></input>
      </div>
    </div>

  )
}

export default DealCheck;