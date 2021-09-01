import {useContext} from "react"
import TimeContext from "../../context/time/timeContext"
import styled from "@emotion/styled"

const BackgroundColor = () => {
  const timeContext = useContext(TimeContext)
  const { backgroundAll } = timeContext
  return backgroundAll
}
export const NavContainer = styled.div`
display: flex;
justify-content: center;
nav{
  max-width: 300px;
  background: #151932;
  font-size: .8rem;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  .NavColor{
    background: ${BackgroundColor};
  }
  button{
    padding: 15px;
    border-radius: 30px;
    border: none;
    margin-right: 5px;
    background: none;
    color: #bcc2e0;
    &:hover,
    &:active{
      background: ${BackgroundColor};
    }
  }
  button:last-child{
    margin-right: 0px;
  }
}
`
