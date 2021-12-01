import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DealsContext } from "../../context/AvailDealsContext";

import DealCard from "../DealCard/DealCard";
import './AllDeals.css'

const CHEAP_SHARK_URL = 'https://www.cheapshark.com/api/1.0/deals?';




const AllDeals = () => {
  const [context, contextData] = useState(undefined);
  const [loading, setLoading] = useState(false)
  const { dealData, setDealData } = useContext(DealsContext);

  const getAllDeals = () => {
    axios.get(CHEAP_SHARK_URL)
    .then((response) => {
       if(response.data.length > 0) {
         setDealData(response.data)
       };
    })
    .finally(() => setLoading(false))
    .catch(e => console.error(`error: ${e}`))
  }

  useEffect(() => {
    setLoading(true);
    getAllDeals();
  })
    
  return (
      <div >
        <ul className='deal-items'> 
                {(dealData || [])
                  .map((deal) => (
                      <DealCard key={deal.dealID} deal={deal}/> 
                  ))
                }
        </ul> 
      </div> 
    )
}

export default AllDeals;