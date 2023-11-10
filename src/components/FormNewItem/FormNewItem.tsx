import "./FormNewItem.scss"

const FormNewItem = () => {
  return (
    <form className="FormNewItem" onSubmit={() => console.log("")}>
        <div>
          <label>Nome</label>
          <input type="text" name="name_item" id="name_item"placeholder="Canja" required/>
        </div>
        <div>
          <label>Preço</label>
          <input type="number" name="price_item" id="price_item" placeholder="8.99" required />
        </div>
        <div>
          <label>Quantidade</label>
          <input type="number" name="quantity_item" id="quantity_item" placeholder="3" required/>
        </div>

        <button>Criar</button>
      </form>
  )
}

export default FormNewItem