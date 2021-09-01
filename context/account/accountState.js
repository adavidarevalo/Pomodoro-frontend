import React, {useReducer} from "react"
import AccountContext from "./accountContext"
import accountReducer from "./accountReducer"
import {
  CHANGE_ACCOUNT
} from "../../type"


const AccountState = ({children})=> {
  const initialState = {
    account: false
  }
  const [state, dispatch] = useReducer(accountReducer, initialState)
  const changeAccount = payload => {
    dispatch({
      type: CHANGE_ACCOUNT,
      payload
    })
  }
  return(
    <AccountContext.Provider
    value={{
      account: state.account,
      changeAccount
    }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export default AccountState