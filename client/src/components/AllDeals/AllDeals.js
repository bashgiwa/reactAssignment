import { useContext, useEffect, useState } from "react";
import { DealsContext } from "../../context/AvailDealsContext";
import { getAllDeals } from "../../services/api/apiHandler";

import DealCard from "../DealCard/DealCard";
import './AllDeals.css'

const RESOURCE = 'deals?';

const AllDeals = () => {
  const [loading, setLoading] = useState(false);
  const { dealData, setDealData } = useContext(DealsContext);
  
  const getDeals = () => {
    getAllDeals(RESOURCE)
      .then((data) => {
        if(data.length > 0) {
          setDealData(data)
        };
      })
      .finally(() => setLoading(true));
  }

  useEffect(() => {
    if(!loading) {
      getDeals();
    }
  })
    
  return (
      <div className="deal-view">
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