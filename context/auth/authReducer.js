import {
  AUTHENTICATION_SUCCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_ERROR,
  GET_TOKEN_START,
  LOGIN_SUCCESSFUL
} from "../../type"

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type){
    case AUTHENTICATION_SUCCESS:
    case LOGIN_SUCCESSFUL:
    console.log("El Pepe", action.payload)
    localStorage.setItem("Token", action.payload.token)
      return{
        ...state,
        autentification: true,
        message: null,
        charging: false,
        token: action.payload.token,
        timer: action.payload.idBase,
        name: action.payload.name
      }
    case REGISTER_ERROR: 
    case LOGIN_ERROR:
/*     case Close_Section: */
      localStorage.removeItem("Token")
      return{
        ...state,
        token: null,
        message: action.payload,
        user: null,
        autentification: null,
        charging: false
      }    
    case GET_USER:
      return{
        ...state,
        user: action.payload,
        autentification: true,
        charging: false
      }
    case GET_TOKEN_START: 
      return{
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}