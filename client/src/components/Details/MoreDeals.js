import { useEffect, useState, useContext } from "react";
import MoreDealItem from "./MoreDealItem";

//remove fake data after fixing CORS
//import { fakeAllStores } from "../AllDeals/FakeData";

const RESOURCE = '/stores';

const MoreDeals = ({cheaperStores}) =>{
  const [loading, setLoading] = useState(false);
  //const [storeInfo, setStoreInfo] = useState(fakeAllStores)

  return (
    <div >
      <div className="detail-header">
        <span> Other deals for this games </span>
      </div>
      <div>
        <ul className='more-deal-items'> 
            {(cheaperStores || [])
              .map((store) => (
                <MoreDealItem key={store.storeID} store={store}/> 
              ))
            }
        </ul>
      </div>
    </div> 
  )
}

export default MoreDeals;