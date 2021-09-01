import '../styles/globals.css'
import TimeState from "../context/time/timeState"
import AccountState from "../context/account/accountState"
import AuthState from "../context/auth/authState"

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
