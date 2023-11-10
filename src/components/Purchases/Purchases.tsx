import "./Purchases.scss"

import moveImg from "@/assets/move_img.png";

import { useNavigate } from "react-router-dom";

const Purchases = () => {

  const navigate = useNavigate()

  const navigateToPurchaseItem = (id: number) => {
    navigate(`/purchase/${id}`)
  }

  const x = true;

  const purchases = [
    {
      id: 1,
      nome: "Feira mensal",
      local: "Mercado São Luiz",
      data: "10/10/2010"
    },
    {
      id: 2,
      nome: "",
      local: "Mercado São Luiz",
      data: "10/11/2010"
    },
    {
      id: 3,
      nome: "Feira mensal 3",
      local: "Mercado São Luiz",
      data: "10/12/2010"
    },
  ]

  if(x) {
    return (
      <>
        {purchases.map((purchase) => (
          purchase.nome ? (
            <section className="Purchases_item" key={purchase.id} onClick={() => navigateToPurchaseItem(purchase.id)}><p>{purchase.nome + " - " + purchase.data}</p>  <img src={moveImg} alt="move" /></section>
          ) : (
            <section className="Purchases_item" key={purchase.id} onClick={() => navigateToPurchaseItem(purchase.id)}><p>{purchase.local + " - " + purchase.data}</p> <img src={moveImg} alt="move" /></section>
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