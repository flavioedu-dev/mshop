import PurchaseItem from "@/components/PurchaseItem/PurchaseItem";
import "./PurchaseItems.scss"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UseFetch } from "@/hooks/UseFetch";
import { PurchaseType } from "@/components/Purchases/Purchases";

const url = "https://localhost:7047/api/Purchase"

const PurchaseItems = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const { data, httpConfig } = UseFetch(`${url}/${id || "erro"}`)

  useEffect(() => {
    httpConfig()
  }, [])
  
  const currentPurchase = data as unknown as PurchaseType
  
  return (
    currentPurchase && (
    <>
    <section className="PurchaseItems">
      <h4>{currentPurchase.title} - {currentPurchase.place}</h4>  
      <div>
        <PurchaseItem url={`${url}/${id}/products`} />
      </div>
    </section>
    <section className="BtnAddItem">
      <p>Total <span>${Number(currentPurchase.totalValue).toFixed(2) || 0}</span></p>
      <button onClick={() => navigate(`/purchase/${id}/new-item`)} >Adicionar item</button>
    </section>
    </>
    )
  )
}

export default PurchaseItems