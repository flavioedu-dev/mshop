import { UseFetch } from "@/hooks/UseFetch"
import { useEffect } from "react"
import Loading from "../Loading/Loading"
import NoOneFound from "../NoOneFound/NoOneFound"

interface IPurchaseItemProps {
    url: string
}

export type PurchaseItemType = {
  id?: string,
  name: string,
  price: number,
  amount: number
}

const PurchaseItem = ({ url }: IPurchaseItemProps) => {
  const { data, httpConfig } = UseFetch(url)

  useEffect(() => {
    httpConfig()
  }, [])

  const items = data as unknown as PurchaseItemType[]

  return (
    <>
    {items ? (
      items.length === 0 ? (
        <NoOneFound>
          <h2>Nenhum produto cadastrado</h2>
        </NoOneFound>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <p>{item.name} x{item.amount} - <span>${item.price.toFixed(2)}</span></p>
            <p>${(item.price * item.amount).toFixed(2)}</p>
          </div>
        ))
      )
      ) : (
        <Loading />
      )}

    </>
    
  )
}

export default PurchaseItem