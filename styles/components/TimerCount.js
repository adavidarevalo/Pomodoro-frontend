import styled from "@emotion/styled"
import {keyframes } from '@emotion/react'
import React, {useContext, useEffect} from "react"
import TimeContext from "../../context/time/timeContext"

const BackgroundColor = () => {
  const timeContext = useContext(TimeContext)
  const { backgroundAll } = timeContext
  return backgroundAll
}

const Text = () =>{
  const timeContext = useContext(TimeContext)
  const { Text } = timeContext
  return Text
}

export const Circle = styled.div`
  box-shadow: 3px 3px 13px 2px rgb(0 0 0 / 20%);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid ${BackgroundColor};
  color: #fff;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p{
    font-family: ${Text}, sans-serif;
    font-size: 2.3rem;
    margin: 0px;
  }
`

export const ButtonSvg = styled.div`
button{
  background: none;
  border: none;
  svg{
    font-size: 23px;
    color: white;
  }
}
`

const Rotacion = keyframes`
  from {
    transform: rotate(-90deg) translateX(60px);
  }

  to {
    transform: rotate(270deg) translateX(60px);
  }
`


export const SecondsSphere  = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: calc(50% - 10px);
  top: calc(50% - 10px);
  animation: ${Rotacion} 60s ease infinite; 
  animation-play-state: running;
`

export const Container = styled.div`
background: #151932;
width: 200px;
height: 200px;
border-radius: 500px;
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
margin: 30px auto;
`