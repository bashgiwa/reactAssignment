import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MoreDeals from "../Details/MoreDeals";
import CheapestDeal from "../Details/CheapestDeal";
import { getSingleDeal } from "../../services/api/apiHandler";
import { getAllStores } from "../../services/api/apiHandler";

import '../Details/Details.css'

//to be removed
import { fakeSingleDeal } from "../AllDeals/FakeData";
import { fakeAllStores } from "../AllDeals/FakeData";

const RESOURCE = 'deals?id=';

const Details = () => {
  const { state } = useLocation();
  const { ID } = state;

  const [loading, setLoading] = useState(false);
  const [dealInfo, setDealInfo ] = useState(fakeSingleDeal);
  const [storeInfo, setStoreInfo ] = useState([]);
  const [allStores, setAllStores ] = useState(fakeAllStores);
 
  const { gameInfo, cheapestPrice, cheaperStores } = dealInfo;

  //setStoreData(fakeAllStores)
  
  const getDetail = () => {
    setLoading(true);
    getSingleDeal(RESOURCE, ID).then((response) => {
      if(response) {
        setDealInfo(response);
      };
    })
    .finally(() => setLoading(false))
  }

  const getStores = () => {
    setLoading(true);
    getAllStores(RESOURCE).then((data) => {
      if(data.length > 0) {
        setAllStores(data);
        updateStores(data);
      };
    })
    .finally(() => setLoading(false))
  }

  const updateStores = (stores) => {
    const updatedStores = transformStores(cheaperStores, stores);
    setStoreInfo(updatedStores);
  }

  const transformStores = (cheaperStores, allStores) => {

    let mapped = cheaperStores.map((store) => {
      let storeInfo = allStores.filter((storeInfo) => storeInfo.storeID === store.storeID )
      if(storeInfo) store.name = storeInfo[0].storeName;
      return store;
    })
    return mapped;
  }
  

  useEffect(() => {
    //setLoading(true);
    //getDetail();
    //getStores();  

     //linse to be removed
    setDealInfo(fakeSingleDeal);  
    updateStores(fakeAllStores);
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
