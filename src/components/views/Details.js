import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import MoreDeals from "../Details/MoreDeals";
import CheapestDeal from "../Details/CheapestDeal";

import '../Details/Details.css'

import { fakeSingleDeal } from "../AllDeals/FakeData";
import { fakeAllStores } from "../AllDeals/FakeData";

const CHEAP_SHARK_DEAL_URL = 'https://www.cheapshark.com/api/1.0/deals?id=';

const transformStores = (cheaperStores, allStores) => {

  let mapped = cheaperStores.map((store) => {
    let storeInfo = allStores.filter((storeInfo) => storeInfo.storeID === store.storeID )
    if(storeInfo) store.name = storeInfo[0].storeName;
    return store;
  })
  return mapped;
}

const Details = () => {
  const { state } = useLocation();
  // const { ID } = state;
  // const detailUrl = `${CHEAP_SHARK_DEAL_URL}${ID}`; 

  const [loading, setLoading] = useState(false);
  const [dealInfo, setDealInfo ] = useState(fakeSingleDeal);
  const [storeInfo, setStoreInfo] = useState(fakeAllStores)

  let { gameInfo, cheapestPrice, cheaperStores } = dealInfo;
  cheaperStores = transformStores(cheaperStores, storeInfo);
  
  // setStoreInfo(fakeAllStores);
  // setDealInfo(fakeSingleDeal);

  // const getDealDetails = () => {
  //   axios.get(detailUrl)
  //   .then((response) => {
  //      if(response.data) {
  //        setDealInfo(response.data);
  //      };
  //   })
  //   .finally(() => setLoading(false))
  //   .catch(e => console.error(`error: ${e}`))
  // }

  useEffect(() => {
    //setLoading(true);
    //getDealDetails();
    
 
  })
  
  return (
      <div className="details">
          <div className="details-left">
            <CheapestDeal gameInfo={gameInfo} cheapestPrice={cheapestPrice}/>
          </div>
          <div className="details-right">
            <MoreDeals cheaperStores={cheaperStores} cheapestPrice={cheapestPrice}/>   
          </div>
      </div>
  )
}

export default Details;
