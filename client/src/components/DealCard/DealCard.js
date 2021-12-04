
import { useState } from 'react/cjs/react.development';
import SalePrice from '../Details/SalePrice';
import ViewMoreButton from '../More/ViewMoreButton';
import './DealCard.css'

const DealCard = ({deal}) => {
    const{ dealID, title, metacriticScore , isOnSale, normalPrice, salePrice} = deal;
    const [onSale ] = useState(isOnSale);    
    return (
        <li>
            <div className="deal-card">
                <div className="card-title">
                    <div className="card-title-child"> <span>{title}</span></div>
                </div>
                <div className="toggle">
                    <div className= {`toggle-child ${onSale? "show": "hide"}`} >
                        <SalePrice retailPrice={normalPrice} price={salePrice}/>
                        </div>
                    <div className= {`toggle-child ${onSale? "hide": "show"}`} ><span>{`Critics Score: ${metacriticScore}`}</span></div>  
                </div>
                <div className="btn"> 
                    <ViewMoreButton dealID={dealID} />
                </div>
            </div>
        </li>
    )
}

export default DealCard; 