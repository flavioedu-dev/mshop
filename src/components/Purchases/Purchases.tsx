import "./Purchases.scss"

import moveImg from "@/assets/move_img.png";

import { useNavigate } from "react-router-dom";
import NoOneFound from "../NoOneFound/NoOneFound";

export type PurchaseType = {
  id?: number,
  title: string,
  place: string,
  totalValue?: number,
  date: Date
}

interface PurchasesProps {
  purchases: PurchaseType[]
}

const Purchases = ({ purchases }: PurchasesProps) => {

  const navigate = useNavigate()

  const navigateToPurchaseItem = (id: string) => {
    navigate(`/purchase/${id}`)
  }

  return (
    purchases.length === 0 ? (
      <NoOneFound styleClass="noOne_Home">
        <h2>Nenhuma compra cadastrada.</h2>
      </NoOneFound>
    ) : (
      <>
        {purchases.map((purchase) => (
          purchase.title ? (
            <section className="Purchases_item" key={purchase.id} onClick={() => navigateToPurchaseItem(String(purchase.id))}><p>{purchase.title + " - " + new Date(purchase.date).toLocaleDateString(`pt-BR`)}</p>  <img src={moveImg} alt="move" /></section>
          ) : (
            <section className="Purchases_item" key={purchase.id} onClick={() => navigateToPurchaseItem(String(purchase.id))}><p>{purchase.place + " - " + new Date(purchase.date).toLocaleDateString(`pt-BR`)}</p> <img src={moveImg} alt="move" /></section>
          )
          ))}
      </>
    )
    
  )
  
}

export default Purchases