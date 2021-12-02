
import { useState, useContext} from 'react/cjs/react.development';
import { FilterOnSaleContext } from '../../context/FilterOnSaleContext';
import SalePrice from '../Details/SalePrice';
import ViewMoreButton from '../More/ViewMoreButton';
import './DealCard.css'

const DealCard = ({deal}) => {
    const{ dealID, title, desc , isOnSale, normalPrice, salePrice} = deal;
    //const [showPrice, setShowPrice] = useState(isOnSale);
    const {saleFlag} = useContext(FilterOnSaleContext);
    
    return (
        <li>
            <div className="deal-card">
                <div className="card-title">
                    <div className="card-title-child"> <span>{title}</span></div>
                </div>
                <div className="toggle">
                    <div className= {`toggle-child ${saleFlag? "show": "hide"}`} >
                        <SalePrice retailPrice={normalPrice} price={salePrice}/>
                        </div>
                    <div className= {`toggle-child ${saleFlag? "hide": "show"}`} ><span>{title}</span></div>  
                </div>
                <div className="btn"> 
                    <ViewMoreButton dealID={dealID} />
                </div>
            </div>
        </li>
    )
}

export default DealCard; 