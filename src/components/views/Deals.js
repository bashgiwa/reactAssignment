import React, { useState, useContext} from "react";

import { DealsContext } from "../../context/AvailDealsContext";
import DealsContextProvider from "../../context/AvailDealsContext";
import FilterOnSaleContextProvider from "../../context/FilterOnSaleContext";

import AllDeals from "../AllDeals/AllDeals";
import Search from "../Search/Search";
import DealCheck from "../Search/SaleCheck";

import './views.css';



const Deals = () => {
    
    //const [contextData, setContextData] = useState(dummyData);
    //const {  dealData, setDealData } = useContext(DealsContext);
   // setDealData(contextData);

    return (
        <div className="deals-page">
            <DealsContextProvider >
                <Search/>
                <FilterOnSaleContextProvider>
                    <DealCheck />   
                    <AllDeals />
                </FilterOnSaleContextProvider>
            </DealsContextProvider>
        </div>
    )
}

export default Deals;