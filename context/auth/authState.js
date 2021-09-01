import React, {useReducer, useEffect} from "react"
import AuthContext from "./authContext"
import authReducer from "./authReducer"
import UserAxios from "../../config/axios"
import tokenAuth from "../../config/tokenAuth"
import {
  AUTHENTICATION_SUCCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_ERROR,
  GET_TOKEN_START,
  LOGIN_SUCCESSFUL
} from "../../type"


const AuthState = ({children}) => {
  const initialState = {
    token: null,
    autentification: null,
    user: null,
    message: null,
    charging: true,
    timer: null,
    name: null
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getTokenStart()
  }
  }, [])

  const [state, dispatch] = useReducer(authReducer, initialState)


  const getTokenStart = () => {
    const getToken = localStorage.getItem("Token")
      dispatch({
        type: GET_TOKEN_START,
        payload: getToken
      })
  }
   const LogIn = async data =>{
     console.log("login ", data)
    try {
      const awswer = await UserAxios.post("/api/auth", data)
      dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: awswer.data
      })
      AuthUser()
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: "Error"
      })      
    }
  }
  const userRegister = async payload => {

    try {
      const awswerTimer = await UserAxios.post("/api/timerContainer") 
      payload.idBase = awswerTimer.data._id
      console.log("payload ",payload)
      const awswer = await UserAxios.post("/api/user", payload)
      console.log("asde ",awswer)

      dispatch({
        type: AUTHENTICATION_SUCCESS,
        payload: awswer.data
      })
      await AuthUser()
    } catch (error) {
      console.log("Error", error)
      /* dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data.msg
      }) */
    }
  }

  const AuthUser = async()=>{
    const token = localStorage.getItem("Token")
    if(token){
      tokenAuth(token)
    }
    try{
      const awswer = await UserAxios.get("/api/auth")
      dispatch({
        type: GET_USER,
        payload: awswer.data.user
      })
    } catch(error){
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      })      
    }
  }
  return(
    <AuthContext.Provider
    value={{
      user: state.user,
      name: state.name,
      autentification: state.autentification,
      timer: state.timer,
      userRegister,
      LogIn
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState