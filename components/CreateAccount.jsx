import react, {useState, useContext} from "react"
import {AccountContainer} from "../styles/components/Account"
import AuthContext from "../context/auth/authContext"

const CreateAccount = () => {
  const authContext = useContext(AuthContext)
  const {userRegister} = authContext
  const [formContainer, setFormContainer] = useState({
    name: "",
    email:"",
    password: "",
    passwordConfirm:""
  })
  const handleChange = e => {
    setFormContainer({
      ...formContainer,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = e => {
    e.preventDefault()
    userRegister(formContainer)
  }
  return(
    <AccountContainer>
      <h2>CREATE ACCOUNT</h2>
      <form method="post">
        <div>
          <label>Name</label>
          <input 
          type="name" 
          placeholder="Name"
          name="name"
          onChange={e=>handleChange(e)}
          />
        </div>
        <div>
          <label>Mail</label>
          <input 
          type="mail" 
          placeholder="Mail"
          name="email"
          onChange={e=>handleChange(e)}
          />
        </div>
        <div>
          <label>Password</label>
          <input 
          type="password" 
          placeholder="Password"
          name="password"
          onChange={e=>handleChange(e)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input 
          type="password" 
          placeholder="Confirm Password"
          name="passwordConfirm"
          onChange={e=>handleChange(e)}
          />
        </div>
        <button
        onClick={e=>handleClick(e)}
        >Create Account</button>
      </form>
    </AccountContainer>
  )
}

export default CreateAccount