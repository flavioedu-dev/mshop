import "./NoOneFound.scss"

import { ReactNode } from "react"

interface NoOneFoundProps {
    children: ReactNode
}

const NoOneFound = ({ children }: NoOneFoundProps) => {
  return (
    <section className="noOneFound">
        {children}
    </section>
  )
}

export default NoOneFound