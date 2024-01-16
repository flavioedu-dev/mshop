import { UseFetch } from "@/hooks/UseFetch"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading"
import NoOneFound from "../NoOneFound/NoOneFound"

interface IPurchaseItemProps {
    url: string,
    setSelectedItems: (ids: string[])=> void
}

export type PurchaseItemType = {
  id?: string,
  name: string,
  price: number,
  amount: number
}

const PurchaseItem = ({ url, setSelectedItems }: IPurchaseItemProps) => {
  const { data, httpConfig } = UseFetch(url)

  const [checkedItems, setCheckedItems] = useState<boolean[]>()

  useEffect(() => {
    httpConfig()
  }, [])

  const items = data as unknown as PurchaseItemType[]

  const updateCheckedItem = (position: number) => {
    if(checkedItems && checkedItems.length > 0) {
      const updatedCheckedItems = checkedItems.map((item, index) => {
        return index === position ? !item : item
      })
  
      setCheckedItems(updatedCheckedItems)
    }
  }

  useEffect(() => {
    items && items.length > 0 ? setCheckedItems(new Array(items.length).fill(false)) : setCheckedItems([])
  }, [items])

  useEffect(() => {
    const listItems: string[] = []
    checkedItems?.forEach((item, index) => {
      if(item) {
        listItems.push(String(items[index].id))
      }
    })
    setSelectedItems(listItems)
  }, [checkedItems])

  return (
    <>
    {items ? (
      items.length === 0 ? (
        <NoOneFound>
          <h2>Nenhum produto cadastrado</h2>
        </NoOneFound>
      ) : (
        items.map((item, index) => (
          <div key={item.id} className="item">
            <div>
              <input type="checkbox" name={item.name} id={item.id} checked={checkedItems![index]} onChange={() => updateCheckedItem(index)} />
              <p>{item.name} x{item.amount} - <span>${item.price.toFixed(2)}</span></p>
            </div>
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