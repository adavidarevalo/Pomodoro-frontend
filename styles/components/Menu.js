import styled from "@emotion/styled"
import {css} from "@emotion/react"

export const ContainerMenu = styled.div`
position: relative;
display: flex;
align-items: center;
section{
  padding: 0px 10px 10px;
}
p{
  color: #bcc2e0;
  font-size: 1rem;
  span{
    font-weight: 700;
  }
}
div{
  background: #151932;
  color: white;
  padding: 12px;
  font-size: 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 22%);
  display: none;
  position: absolute;
  min-width: 150px;
  right: -8px;
  top: 47px;
  button:first-child{
    margin-bottom: 15px;
  }
  button{
    border: none;
    background: none;
    color: white;
    font-size: 1rem;
    &:hover{
      text-decoration: underline;
    }
  }
}
&:hover,
&:active{
  div{
    display: grid;
  }
}
`