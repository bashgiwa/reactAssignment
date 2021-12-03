import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MoreDeals from "../Details/MoreDeals";
import CheapestDeal from "../Details/CheapestDeal";
import { getSingleDeal } from "../../services/api/apiHandler";
import { getAllStores } from "../../services/api/apiHandler";

import '../Details/Details.css'

//const DEAL_RESOURCE = 'deals?id=';
const DEAL_RESOURCE = 'singledeal?';
const STORES_RESOURCE = 'stores';

const Details = () => {
  const { state } = useLocation();
  const { ID } = state;
  const [loaded, setLoaded] = useState(false);
  const [dealInfo, setDealInfo ] = useState({});
  const [storeInfo, setStoreInfo ] = useState([]);
  const [allStores, setAllStores ] = useState([]);
 
  const { gameInfo, cheapestPrice, cheaperStores } = dealInfo;
  
  const getDetail = () => {
    getSingleDeal(DEAL_RESOURCE, ID)
    .then((response) => {
      if(response) {
        setDealInfo(response);
      };
    })
    .then(() => getStores())
    .finally(() => setLoaded(true))
  }

  const getStores = () => {
    getAllStores(STORES_RESOURCE).then((data) => {
      if(data.length > 0) {
        setAllStores(data); 
        updateStores(data); 
      };
    })
  }

  const updateStores = (stores) => {
    if(stores && cheaperStores) {
      const updatedStores = mapStoreIDToName(cheaperStores, stores);
      setStoreInfo(updatedStores);
    }
  }

  const mapStoreIDToName = (cheaperStores, allStores) => {
    let mapped = cheaperStores.map((store) => {
      let storeInfo = allStores.filter((storeInfo) => storeInfo.storeID === store.storeID )
      if(storeInfo) store.name = storeInfo[0].storeName;
      return store;
    })
    return mapped;
  }
  
  useEffect(() => {
    if(!loaded) {
      getDetail(); 
    }
  })
  
  return (
      <div className="details">
          <div className="details-left">
            <CheapestDeal gameInfo={gameInfo} cheapestPrice={cheapestPrice} stores={allStores}/>
          </div> 
          <div className="details-right">
              <MoreDeals cheaperStores={storeInfo} cheapestPrice={cheapestPrice}/>  
          </div>
      </div>
  )
}

export default Details;
