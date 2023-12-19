import "./Purchases.scss"

import moveImg from "@/assets/move_img.png";

import { useNavigate } from "react-router-dom";

export type PurchaseType = {
  id: number,
  title: string,
  place: string,
  date: Date
}

interface PurchasesProps {
  purchases: PurchaseType[]
}

const Purchases = ({ purchases }: PurchasesProps) => {

  const navigate = useNavigate()

  const navigateToPurchaseItem = (id: number) => {
    navigate(`/purchase/${id}`)
  }

  // const purchases: PurchaseType[] = [
  //   {
  //     id: 1,
  //     name: "Feira mensal",
  //     place: "Mercado São Luiz",
  //     date: new Date("10/10/2023")
  //   },
  //   {
  //     id: 2,
  //     name: "",
  //     place: "Mercado São Luiz",
  //     date: new Date("10/11/2023")
  //   },
  //   {
  //     id: 3,
  //     name: "Feira mensal 3",
  //     place: "Mercado São Luiz",
  //     date: new Date("10/12/2023")
  //   },
  // ]

  if(purchases.length !== 0) {
    return (
      <>
        {purchases.map((purchase) => (
          purchase.title ? (
            <section className="Purchases_item" key={purchase.id} onClick={() => navigateToPurchaseItem(purchase.id)}><p>{purchase.title + " - " /* + purchase.date.toLocaleDateString() */}</p>  <img src={moveImg} alt="move" /></section>
          ) : (
            <section className="Purchases_item" key={purchase.id} onClick={() => navigateToPurchaseItem(purchase.id)}><p>{purchase.place + " - " /* + purchase.date.toLocaleDateString() */}</p> <img src={moveImg} alt="move" /></section>
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