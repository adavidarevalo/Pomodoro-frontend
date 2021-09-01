import React, {useState, useContext, useEffect} from "react"
import AccountContext from "../context/account/accountContext"
import Login from "../components/Login"
import CreateAccount from "../components/CreateAccount"
import Header from "../components/Header"
import {
  Button, 
  ContaienrDiv,
  ContaienrButton,
} from "../styles/components/Account"



const account = () => {
  const accountContext = useContext(AccountContext)
  const {account} = accountContext
  const [accontContainer, setAccountContainer] = useState(false)

  useEffect(() => {
    setAccountContainer(account)
  }, [account])



  const handleLogin = (e) => {
    e.preventDefault()
    setAccountContainer(true)
  }
  const handleCreateAccount = (e) => {
    e.preventDefault()
    setAccountContainer(false)
  }
  return(
    <div>
      <Header/>
      <ContaienrDiv>
        <ContaienrButton>
          <Button
          onClick={e=>handleLogin(e)} 
          background= {accontContainer ? "#fa6e6c" : "#2d3262"}
          >Login</Button>
          <Button
          background= {!accontContainer ? "#fa6e6c" : "#2d3262"}
          onClick={e=>handleCreateAccount(e)}
          >Create Account</Button>
        </ContaienrButton>
        <div>
          {accontContainer? <Login/> :<CreateAccount/>}
        </div>
      </ContaienrDiv>
    </div>
  )
}

export default account