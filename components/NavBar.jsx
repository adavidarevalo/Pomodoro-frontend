import React, {useContext, useState} from "react"
import {NavContainer} from "../styles/components/NavBar"
import Link from 'next/link'
import TimeContext from "../context/time/timeContext"


const NavBar = () => {
  const [navBarColor, setNavBarColor] = useState({
    pomodoro: true,
    shortBreak: false,
    longBreak: false
  })
  const timeContext = useContext(TimeContext)
  const {changeTime} = timeContext
  const handleClick = (e) => {
    changeTime(e.target.name)
    setNavBarColor({
    pomodoro: false,
    shortBreak: false,
    longBreak: false,
    [e.target.name]: true,
    })
  }

  return(
    <NavContainer>
      <nav>
          <button
          name="pomodoro"
          onClick={(e)=>handleClick(e)}
          className={navBarColor.pomodoro&&"NavColor"}
          >pomodoro</button>
        <button
          name="shortBreak"
          onClick={(e)=>handleClick(e)}
          className={navBarColor.shortBreak&&"NavColor"}
        >short break</button>
        <button
          name="longBreak"
          onClick={(e)=>handleClick(e)}
          className={navBarColor.longBreak&&"NavColor"}
        >long break</button>
      </nav>
    </NavContainer>
  )
}

export default NavBar