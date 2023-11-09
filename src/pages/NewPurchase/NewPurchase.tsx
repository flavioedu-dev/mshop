import { FormEvent } from "react"
import "./NewPurchase.scss"

const Purchase = () => {

  const createNewPurchase = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Criando nova feira")
  }

  return (
    <section className="NewPurchase_container">
      <form className="NewPurchase" onSubmit={createNewPurchase}>
        <div>
          <label>Nome</label>
          <input type="text" name="name" id="name"placeholder="Feira da mensal (Opcional)" />
        </div>
        <div>
          <label>Local</label>
          <input type="text" name="marketplace" id="marketplace" placeholder="Mercado São Luiz" required />
        </div>
        <div>
          <label>Data da compra</label>
          <input type="date" name="purchaseDate" id="purchaseDate" required />
        </div>

        <button>Criar</button>
      </form>
    </section>
  )
}

export default Purchase