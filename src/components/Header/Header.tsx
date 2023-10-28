import "./Header.scss"

import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header className="Header">
      <div><AiOutlineMenu /></div>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header