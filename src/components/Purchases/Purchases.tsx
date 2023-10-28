import "./Purchases.scss"

const Purchases = () => {

  const x = false;

  if(x) {
    return (
      <section>Purchases</section>
    )
  }

  return (
    <section className="not_found_lists">
      <h2>Nenhuma lista criada.</h2>
    </section>
  )
  
}

export default Purchases