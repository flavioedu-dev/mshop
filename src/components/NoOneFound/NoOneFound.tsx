import "./NoOneFound.scss"

import { ReactNode } from "react"

interface NoOneFoundProps {
  styleClass?: string,
  children: ReactNode
}

const NoOneFound = ({ children, styleClass }: NoOneFoundProps) => {
  return (
    <section className={ styleClass || "noOneFound"}>
        {children}
    </section>
  )
}

export default NoOneFound