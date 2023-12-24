import { useEffect, useState } from "react"
import "./Loading.scss"

const Loading = () => {
  const [overload, setOverload] = useState(false)

  useEffect(() => {
    const timeOutLoad = setTimeout(() => {
      setOverload(true)
    }, 4000)

    return () => clearTimeout(timeOutLoad)
  }, [])

  return (
    overload ? (
      <h3 className="time_exceeded">Tempo limite excedido!<br></br> Recarregue a página.</h3>
    ) : (
      <section className="loading_container">
          <div className="load"></div>
      </section>
    )
  )
}

export default Loading