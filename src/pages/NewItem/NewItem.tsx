import "./NewItem.scss"
import { FormEvent, useEffect, useRef, useState } from "react"
import { UseFetch } from "@/hooks/UseFetch"
import { useNavigate, useParams } from "react-router-dom"
import { PurchaseItemType } from "@/components/PurchaseItem/PurchaseItem"

const url = "https://localhost:7047/api/Purchase"

const NewItem = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>()

  const nameRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const amountRef = useRef<HTMLInputElement>(null)

  const { data, httpConfig, call } = UseFetch(`${url}/${id}/products`)

  const addNewItemInPurchase = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    
    const currentName = nameRef.current!.value
    const currentPrice = priceRef.current!.value
    const currentAmount = amountRef.current!.value
    
    const newItem: PurchaseItemType = {
      name: currentName,
      price: Number(currentPrice),
      amount: Number(currentAmount)
    }

    httpConfig<PurchaseItemType>("POST", newItem)
  }

  useEffect(() => {
    if(call) {
      if(data?.status)
        setError("Erro ao cadastrar compra.")
      else {
        setSuccess("Compra cadastrada com sucesso.")
        const formPurchase = document.querySelector<HTMLFormElement>(".FormNewItem")
        formPurchase?.reset()
        navigate(`/purchase/${id}`)
      }
    }
  }, [data])

  return (
    <section className="FormNewItem_container">
      <form className="FormNewItem" onSubmit={addNewItemInPurchase}>
        <div>
          <label>Nome</label>
          <input type="text" name="name_item" id="name_item" ref={nameRef}  placeholder="Canja" required/>
        </div>
        <div>
          <label>Preço</label>
          <input type="number" name="price_item" id="price_item" ref={priceRef} placeholder="8.99" required />
        </div>
        <div>
          <label>Quantidade</label>
          <input type="number" name="quantity_item" id="quantity_item" ref={amountRef} placeholder="3" required/>
        </div>

        <button>Criar</button>
      </form>

      {error !== "" ? (
       <p className="error_message">{error}</p>
       ) : (
        <p className="error_message">{success}</p>
       )}
    </section>

  )
}

export default NewItem