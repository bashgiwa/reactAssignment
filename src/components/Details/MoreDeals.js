import MoreDealItem from "./MoreDealItem";

const MoreDeals = ({cheaperStores}) =>{
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