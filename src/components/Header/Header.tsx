import "./Header.scss"

import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png"

import { useNavigate } from "react-router-dom"

const Header = () => {
  
  const navigation = useNavigate()

  return (
    <header className="Header">
      <div><AiOutlineMenu /></div>
      <div>
        <img src={logo} alt="logo" onClick={() => navigation("/")}/>
      </div>
    </header>
  )
}

export default Header