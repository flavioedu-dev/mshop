import { FormEvent, useEffect, useRef, useState } from "react"
import "./NewPurchase.scss"
import { UseFetch } from "@/hooks/UseFetch"
import { PurchaseType } from "@/components/Purchases/Purchases"

const url = "https://localhost:7047/api/Purchase"

const Purchase = () => {
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>()

  const titleRef = useRef<HTMLInputElement>(null)
  const placeRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)

  const { data, httpConfig, call } = UseFetch(url)

  const createNewPurchase = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    const currentTitle = titleRef.current!.value
    const currentPlace = placeRef.current!.value
    const currentDate = dateRef.current!.value

    const newPurchase: PurchaseType = {
      title: currentTitle,
      place: currentPlace,
      date: new Date(currentDate)
    }

    httpConfig<PurchaseType>("POST", newPurchase)
  }

  useEffect(() => {
    console.log(data)
    if(call) {
      if(data?.status)
        setError("Erro ao cadastrar compra.")
      else {
        setSuccess("Compra cadastrada com sucesso.")
      }
    }
  }, [data])

  return (
    <section className="NewPurchase_container">
      <form className="NewPurchase" onSubmit={createNewPurchase}>
        <div>
          <label>Nome</label>
          <input type="text" name="name" id="name" ref={titleRef} placeholder="Feira da mensal (Opcional)" />
        </div>
        <div>
          <label>Local</label>
          <input type="text" name="place" id="place" ref={placeRef} placeholder="Mercado São Luiz" required />
        </div>
        <div>
          <label>Data da compra</label>
          <input type="date" name="purchaseDate" id="purchaseDate" ref={dateRef} required />
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

export default Purchase