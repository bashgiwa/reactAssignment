import './Details.css'

const formatCurrency = (string) => `$${string}`;
const SalePrice = ({retailPrice, price, onSale})=>{
  const isOnSale = parseFloat(retailPrice) - parseFloat(price) > 0? "1": "0";
  onSale = onSale || isOnSale;
  
  retailPrice = formatCurrency(retailPrice);
  price = formatCurrency(price)
  
  return (
    <div className="sale-price"> 
      <span placeholder = "normalPrice" className= {`retail-price ${onSale === "1"? "show": "hide"}`}> {retailPrice}</span>
      <span placeholder = "onsalePrice" className="sale-price" > {price}</span>
    </div>
  )
}
export default SalePrice;