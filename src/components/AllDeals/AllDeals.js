import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DealsContext } from "../../context/AvailDealsContext";
import { fakeAllDeals } from "./FakeData";
import { getAllDeals } from "../../services/api/apiHandler";

import DealCard from "../DealCard/DealCard";
import './AllDeals.css'

const CHEAP_SHARK_URL = 'https://www.cheapshark.com/api/1.0/deals?';

const AllDeals = () => {
  const [loading, setLoading] = useState(false)
  const { dealData, setDealData } = useContext(DealsContext);

  // const getAnDeals = () => {
  
  //   axios(CHEAP_SHARK_URL)
  //   .then((response) => {
  //      if(response.data.length > 0) {
  //        setDealData(response.data)
  //      };
  //   })
  //   .finally(() => setLoading(false))
  //   .catch(e => console.error(`error: ${e}`))
  // }

  const getDeals = () => {
    getAllDeals()
      .then((data) => {
        if(data.length > 0) {
          setDealData(data)
        };
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true);
    getDeals();
    //getAllDeals();
    setDealData(fakeAllDeals)
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