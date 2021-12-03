import ViewMoreButton from "../More/ViewMoreButton";
import SalePrice from "./SalePrice";

import './Details.css'

const MoreDealItem = ({store}) => {
  const{dealID, name, salePrice, retailPrice} = store;
 
  return (
      <li>
          <div className="more-deal-item">
              <div className="item-left">
                <div className="item-name"><span>{name}</span></div>
                <div><SalePrice retailPrice={retailPrice} price={salePrice}/></div> 
              </div>
              <div className="item-right">
                <ViewMoreButton dealID={dealID} />
              </div>
          </div>
      </li>
  )
}

export default MoreDealItem;