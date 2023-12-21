import "./Purchases.scss"

import moveImg from "@/assets/move_img.png";

import { useNavigate } from "react-router-dom";

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
    console.log(id)
    navigate(`/purchase/${id}`)
  }

  if(purchases.length !== 0) {
    return (
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
  }

  return (
    <section className="not_found_lists">
      <h2>Nenhuma lista criada.</h2>
    </section>
  )
  
}

export default Purchases