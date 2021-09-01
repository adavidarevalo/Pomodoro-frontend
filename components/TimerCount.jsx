import React, {useState, useEffect, useContext} from "react"
import {Circle, Container, ButtonSvg} from "../styles/components/TimerCount"
import TimeContext from "../context/time/timeContext"
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlinePause } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";


const TimerCount = () => {
  const timeContext = useContext(TimeContext)
  const {
    time, 
    changePlayPause,
    safeChangeTime,
    changeTime
  } = timeContext

  const [second , setSecond] = useState(0)
  const [minute , setMinut] = useState(time)
  const [playPause , setPlayPause] = useState(true)
  useEffect(() => {
    setPlayPause(true)
    changePlayPause(false)
    setMinut(time)
    setSecond(0)
  }, [time])

  useEffect(() => {
    //keyframe
  if(!playPause){
  if(minute === 0 && second === 0){
    changePlayPause(false)
    changeTime(time)
    setSecond(0)
    setMinut(time)
    setPlayPause(true)
  } else {
    setTimeout(() => {
    if(second === 0){
     setSecond(59)
     setMinut(minute-1)
    } else {
      setSecond(second - 1)
    }
  }, 1000);
  }
 }
  }, [minute, second, playPause, time])

  //repeat 
  const handleRepeat = (minute) => {
    changePlayPause(false)
    setPlayPause(true)
    setMinut(minute - 1)
    setSecond(59)
  }


  const PausePlayContainer = () => {
    safeChangeTime(Math.round(Number(minute)))
    setPlayPause(!playPause)
    if(playPause){
      changePlayPause(true)
    } else {
      changePlayPause(false)
    }
  }
  return(
    <Container>
      <Circle>
          <p>{minute} : {second}</p>
          <ButtonSvg>
            <button
            onClick={PausePlayContainer}
            >{playPause ? <AiFillCaretRight/> :   <AiOutlinePause/>}
            </button>
            <button
            onClick={()=>handleRepeat(time)}
            ><BsArrowCounterclockwise/></button>
          </ButtonSvg>
      </Circle>
    </Container>
  )
}

export default TimerCount