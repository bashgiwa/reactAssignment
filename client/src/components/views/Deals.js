
import DealsContextProvider from "../../context/AvailDealsContext";

import AllDeals from "../AllDeals/AllDeals";
import Search from "../Search/Search";
import DealCheck from "../Search/SaleCheck";

import './views.css';

const Deals = () => {
    return (
        <div className="deals-page">
            <DealsContextProvider >
                <Search/>
                <DealCheck />   
                <AllDeals />
            </DealsContextProvider>
        </div>
    )
}

export default Deals;