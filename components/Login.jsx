import react, {useState, useContext, useEffect} from "react"
import {AccountContainer} from "../styles/components/Account"
import AuthContext from "../context/auth/authContext"
import {useRouter} from "next/router"

const Login = (props) => {
  const {LogIn, name, user, token, autentification} = useContext(AuthContext)
  const [formContainer, setFormContainer] = useState({
    email:"",
    password: ""
  })
  const handleChange = e => {
    setFormContainer({
      ...formContainer,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = e => {
    e.preventDefault()
    LogIn(formContainer)
  }
  const router = useRouter();
  useEffect(() => {
    if(autentification){
      console.log("Yes Baby ", history)
      router.push("/");
    }
  }, [autentification, name])
  return(
    <AccountContainer>
      <h2>LOGIN</h2>
      <form method="post">
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
        <button
        onClick={e=>handleClick(e)}
        >Login</button>
      </form>
    </AccountContainer>
  )
}

export default Login