import { useNavigate } from "react-router-dom";
import "./Header.scss"

import { AiOutlineArrowLeft } from "react-icons/ai";

interface IHeaderProps {
  pageTitle: string;
}

const Header = ({ pageTitle }: IHeaderProps) => {
  
  const navigation = useNavigate()

  return (
    <header className="Header">
      <div onClick={() => navigation(-1)}><AiOutlineArrowLeft /></div>
        <h2>{pageTitle}</h2>
    </header>
  )
}

export default Header