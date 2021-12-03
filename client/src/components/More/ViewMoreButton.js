import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ViewMoreButton.css'

const ViewMoreButton = ({dealID}) => {
  const [id] = useState(dealID)
  const navigate = useNavigate();

  const handleClickEvent = () =>{
    navigate('/details', {state: {ID: id}});
  }

  return (
    <button type="button" className="view-more" onClick={handleClickEvent}> View More </button>
  )
}

export default ViewMoreButton; 