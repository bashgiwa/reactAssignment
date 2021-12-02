import './Details.css'

const formatCurrency = (string) => `$${string}`;
const SalePrice = ({retailPrice, price})=>{
  
  retailPrice = formatCurrency(retailPrice);
  price = formatCurrency(price)
  
  return (
    <div className="sale-price">
      <span className="retail-price"> {retailPrice}</span>
      <span className="sale-price"> {price}</span>
    </div>
  )
}
export default SalePrice;