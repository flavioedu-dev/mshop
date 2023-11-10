import { PurchaseItemType } from "@/pages/PurchaseItems/PurchaseItems"

interface IPurchaseItemProps {
    item: PurchaseItemType
}

const PurchaseItem = ({ item }: IPurchaseItemProps) => {
  return (
    <div>
        <p key={item.id}>{item.name} x{item.quantity} - <span> ${item.price.toFixed(2)}</span></p>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  )
}

export default PurchaseItem