import React,{useContext} from "react"
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link"
import {ContainerMenu} from "../styles/components/Menu"
import AccountContext from "../context/account/accountContext"
import AuthContext from "../context/auth/authContext"


const Menu = () => {
  const {changeAccount} = useContext(AccountContext)
  const {name} = useContext(AuthContext)

  const handleLogin = () => {
    changeAccount(false)
  }
  const handleCreateAccount = () => {
    changeAccount(true)
  }
  console.log("name ", name)
  return(
    <ContainerMenu>
      {name && <p>Hi {name}</p>}
      <AiOutlineUser fixed={false}/>
      <div>
        <Link 
        href="/account"
        >
          <button
          onClick={handleLogin}
          >
            Create Account
          </button>
          </Link>
        <Link 
        href="/account"
        onClick={handleCreateAccount}
        >
          <button
          onClick={handleCreateAccount}
          >
            Login
          </button>
          </Link>
      </div>
    </ContainerMenu>
  )
}

export default Menu