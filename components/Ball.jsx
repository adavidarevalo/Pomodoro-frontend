import React, {useState, useContext, useEffect} from "react"
import styled from "@emotion/styled"
import {keyframes } from '@emotion/react'
import TimeContext from "../context/time/timeContext"

const Ball = () => {
  const timeContext = useContext(TimeContext)
  const {playPause, timeStop, backgroundAll, time} = timeContext
  const [minute , setMinut] = useState(timeStop * 60)
  const [pause, setPause] = useState(playPause)

  useEffect(() => {
    setPause(playPause)
  }, [playPause])

  useEffect(() => {
    if(timeStop != 0){
      setMinut(timeStop * 60)
    }
  }, [timeStop])



  console.log("pause ",pause)
    //styles Kayfrane
  const Rotacion = keyframes`
  from {
    transform: rotate(-90deg) translateX(85px);
  }

  to {
    transform: rotate(270deg) translateX(85px);
  }
`

  const SecondsSphere  = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${backgroundAll};
  position: absolute;
  left: 46%;
  top: 46%;
  animation: ${Rotacion} ${minute}s linear infinite; 
  animation-play-state: ${!pause && `paused`};

`


  return(
    <>
      <SecondsSphere></SecondsSphere>
    </>
  )
}

export default Ball