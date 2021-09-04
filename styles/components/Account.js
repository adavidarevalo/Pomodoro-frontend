import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

export const ContaienrDiv = styled.div`
width: 90%;
margin: 0 auto;
background: #bbc3ea;
border-radius: 5px;
padding: 10px;
max-width: 500px;
animation-name: ${fadeIn};
animation-duration: 1s;
animation-fill-mode: both;
`
export const ContaienrButton = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 5px;
`
export const Button = styled.div(
  {
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "1.05rem",
    color: "white",
    padding: "5px",
    cursor: "pointer"
  },
  props => ({ background: props.background })
)


export const AccountContainer = styled.section`
padding: 10px;

h2{
  text-align: center;
  margin-top: 15px;
  letter-spacing: 5px;
  color: #1e2140;
}
form{
  div{
    label{
      display: block;
      font-size: 1rem;
      color: #1e2140;
    }
    input{
      width: 100%;
      padding: 5px;
      font-size: 1rem;
      margin-bottom: 15px;
      outline: none;
    }
  }
  button{
    font-size: 1rem;
    padding: 5px;
    margin-top: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background: #fa6e6c;
    color: #fff;
    cursor: pointer;
    &:hover,
    &:active{
      background: #e06260;
      box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
    }

  }
}
`

