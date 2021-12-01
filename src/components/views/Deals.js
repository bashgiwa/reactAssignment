import React, { useState, useContext} from "react";

import { DealsContext } from "../../context/AvailDealsContext";
import DealsContextProvider from "../../context/AvailDealsContext";


import AllDeals from "../AllDeals/AllDeals";
import Search from "../Search/Search";
import DealCheck from "../Search/SaleCheck";


const Deals = () => {
    
    //const [contextData, setContextData] = useState(dummyData);
    //const {  dealData, setDealData } = useContext(DealsContext);
   // setDealData(contextData);

    return (
        <div className="deals_page">
            <DealsContextProvider >
                <Search/>
                <DealCheck />
                <AllDeals />
            </DealsContextProvider>
        </div>
    )
}

export default Deals;