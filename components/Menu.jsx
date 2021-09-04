import React,{useContext} from "react"
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link"
import {ContainerMenu} from "../styles/components/Menu"
import AccountContext from "../context/account/accountContext"
import AuthContext from "../context/auth/authContext"


const Menu = () => {
  const {changeAccount} = useContext(AccountContext)
  const {name, logOut} = useContext(AuthContext)

  const handleLogin = () => {
    changeAccount(false)
  }
  const handleCreateAccount = () => {
    changeAccount(true)
  }
  
  return(
    <ContainerMenu>
      {name && <p>Hi <span>{name}</span></p>}
      <section>
        <AiOutlineUser fixed={false}/>
      </section>
      {name? (
        <div>
          <Link href="/">
            <button onClick={logOut}>
              LogOut
            </button>
          </Link>
        </div>
      ):(
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
      )}
    </ContainerMenu>
  )
}

export default Menu