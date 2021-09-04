import React, {useState, useEffect, useContext, useRef} from "react"
import {Circle, Container, ButtonSvg} from "../styles/components/TimerCount"
import TimeContext from "../context/time/timeContext"
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlinePause } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";


const TimerCount = () => {
  //Sound
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  function toggleIsPlaying(payload) {
    setIsPlaying(payload)
    setTimeout(() => {
      setIsPlaying(false)
    }, 5000);
  }
  useEffect(()=> {
    if (!audioRef.current) {
        return;
    }
  
    if (isPlaying) {
        audioRef.current.play()
    } else {
        audioRef.current.pause()
    }
  }, [isPlaying])
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
    toggleIsPlaying(true)
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
            onClick={()=>{
              PausePlayContainer()
              toggleIsPlaying(false)
            }}
            >{playPause ? <AiFillCaretRight/> :   <AiOutlinePause/>}
            </button>
            <button
            onClick={()=>{
              handleRepeat(time)
              toggleIsPlaying(false)
            }}
            ><BsArrowCounterclockwise/></button>
            <audio 
              src='/alarm.mp3' 
              autoPlay={true} 
              ref={audioRef}
            />
          </ButtonSvg>
      </Circle>
    </Container>
  )
}

export default TimerCount