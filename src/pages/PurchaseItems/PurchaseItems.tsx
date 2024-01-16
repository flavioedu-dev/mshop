import PurchaseItem from "@/components/PurchaseItem/PurchaseItem";
import "./PurchaseItems.scss"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UseFetch } from "@/hooks/UseFetch";
import { PurchaseType } from "@/components/Purchases/Purchases";
import Loading from "@/components/Loading/Loading";
import Header from "@/components/Header/Header";

const url = "https://localhost:7047/api/Purchase"

const PurchaseItems = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [selectedItems, SetSelectedItems] = useState<string[]>([])

  const { data, httpConfig } = UseFetch(`${url}/${id || "erro"}`)

  useEffect(() => {
    httpConfig()
  }, [])
  
  const currentPurchase = data as unknown as PurchaseType
  
  return (
    currentPurchase ? (
    <>
      <Header pageTitle='Produtos' />
      <section className="PurchaseItems">
        <h4>{currentPurchase.title} - {currentPurchase.place}</h4>  
        <div className="container_items">
          <PurchaseItem url={`${url}/${id}/products`} setSelectedItems={SetSelectedItems} />
        </div>
      </section>
      <section className="BtnAddItem">
        <p>Total <span>${Number(currentPurchase.totalValue).toFixed(2) || 0}</span></p>

        

        {(() => {
          switch(selectedItems.length){
            case 0: 
              return <button onClick={() => navigate(`/purchase/${id}/new-item`)} >Editar item</button>
            case 1:
              return (
              <>
                <button onClick={() => navigate(`/purchase/${id}/new-item`)} >Editar item</button>
                <button onClick={() => navigate(`/purchase/${id}/new-item`)} >Excluir item</button>
              </>
              )
            default:
              return <button onClick={() => navigate(`/purchase/${id}/new-item`)} >Excluir items</button>
          }
        })()}
      </section>
    </>
    ) : (
      <Loading />
    )
  )
}

export default PurchaseItems