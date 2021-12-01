
import ViewMoreButton from '../More/ViewMoreButton';
import './DealCard.css'

const DealCard = ({deal}) => {
    const{title, desc} = deal;
    return (
        <li>
            <div className="deal-card">
                <ul>
                    <li className="title">
                        <div className="title-child"> <span>{title}</span></div>
                    </li>
                    <li className="desc"><span>{title}</span></li>
                    <li><ViewMoreButton /></li> 
                </ul>
            </div>
        </li>
       
    )
}

export default DealCard; 