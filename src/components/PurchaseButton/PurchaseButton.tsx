import "./PurchaseButton.scss"

import { GrAdd } from "react-icons/gr"

import { useNavigate } from "react-router-dom"

const PurchaseButton = () => {
  const navigation = useNavigate()

  return (
    <button className="purchase_btn" onClick={() => navigation("/purchase")}>
      <GrAdd></GrAdd>
    </button>
  )
}

export default PurchaseButton