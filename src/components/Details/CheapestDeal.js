import SalePrice from "./SalePrice";

import './Details.css'

const formatCurrency = (string) => `$${string}`;

const CheapestDeal = ({gameInfo, cheapestPrice})=> {
  const {name, retailPrice, thumb } = gameInfo;
  const {price} = cheapestPrice;
  const savings = formatCurrency((parseFloat(retailPrice) - parseFloat(price)).toString());
  return (
    <div>
      <ul>
          <li className="title">
              <div className="title-child"> <span>{name}</span></div>
          </li>
          <li>
            <div className="price-view">
              <SalePrice retailPrice={retailPrice} price={price}/>
              <div className="savings"><span className="saved" >{savings}</span></div> 
            </div>
          </li>
          <li>
            <div className="detail-header">
              <span>Available at BT Games</span>
            </div>
          </li>
          <li>
            <div className="image-wrapper">
              <img className="deal-img" src={thumb} alt="Logo"></img>
            </div>
          </li>
      </ul> 
    </div>
  )
}

export default CheapestDeal;