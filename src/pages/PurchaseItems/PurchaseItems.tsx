import "./PurchaseItems.scss"

import { useState, useEffect } from "react";

type PurchaseItem = {
  id: number,
  name: string,
  price: number,
  quantity: number
}

const PurchaseItems = () => {

  const [totalValue, setTotalValue] = useState<number>(0)

  const purchaseItems: PurchaseItem[] = [
    {
      id: 1,
      name: "Arroz",
      price: 4.90,
      quantity: 5
    },
    {
      id: 2,
      name: "Feijão",
      price: 7.99,
      quantity: 2
    },
    {
      id: 3,
      name: "Cuscuz",
      price: 2.0,
      quantity: 7
    },
  ]

  useEffect(() => {
    purchaseItems.map((item) => {
      setTotalValue(prev => prev + (item.price * item.quantity))
    })
  }, [])

  return (
    <>
    <section className="PurchaseItems">
      <h4>Feira Mensal - Mercado São Luiz</h4>
      {purchaseItems.map((item) => (
        <div>
          <p key={item.id}>{item.name} x{item.quantity} - <span> ${item.price.toFixed(2)}</span></p>
          <p>${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
    </section>
    <section className="BtnAddItem">
      <p>Total <span>${totalValue.toFixed(2)}</span></p>
      <button>Adicionar item</button>
    </section>
    </>
  )
}

export default PurchaseItems