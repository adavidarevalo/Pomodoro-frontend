import React, {useState, useEffect} from 'react'
import '../styles/globals.css'
import TimeState from "../context/time/timeState"
import AccountState from "../context/account/accountState"
import AuthState from "../context/auth/authState"
import tokenAuth from '../config/tokenAuth'

let token

  if (typeof window !== 'undefined') {
    token = localStorage.getItem("Token")
}

if(token){
  tokenAuth(token)
}

function MyApp({ Component, pageProps }) {
  return( 
    <AuthState>
      <TimeState>
        <AccountState>
          <Component {...pageProps} />
        </AccountState>
      </TimeState>
    </AuthState>
  )
}

export default MyApp
