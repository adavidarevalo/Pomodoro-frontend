import React, {useReducer} from "react"
import timeReducer from "./timeReducer"
import TimeContext from "./timeContext"
import {
  CHANGE_PLAY_PAUSE,
  CHANGE_TIME,
  CHANGES_TIMES_L_S_P,
  SAFE_CHANGE_TIME
} from "../../type"

const TimeState = ({children}) => {
  const initialState = {
    time: 25,
    timeStop: 25,
    playPause: true,
    pomodoro: 25,
    longBreak: 15,
    shortBreak: 5,
    backgroundAll: "#fa6e6c",
    Text: "Roboto"
  }
  const [state, dispatch] = useReducer(timeReducer, initialState)

  const changePlayPause = payload =>{
    console.log("pause xx ", payload)
    dispatch({
      type:CHANGE_PLAY_PAUSE,
      payload
    })
  }

  const changeTime = payload => {
    if(payload == "pomodoro") {
      payload = state.pomodoro
    } else if(payload == "longBreak"){
      payload = state.longBreak
    } else if(payload == "shortBreak"){
      payload = state.shortBreak
    }
    dispatch({
      type: CHANGE_TIME,
      payload: payload
    })
  }

  const changeTimesShortLongP = payload => {
    dispatch({
      type: CHANGES_TIMES_L_S_P,
      payload
    })
  }

  const safeChangeTime = payload => {
    console.log("pause ",payload)
    dispatch({
      type: SAFE_CHANGE_TIME,
      payload
    })
  }

  return(
    <TimeContext.Provider value={{
      time: state.time,
      timeStop: state.timeStop,
      playPause: state.playPause,
      pomodoro: state.pomodoro,
      longBreak: state.longBreak,
      shortBreak: state.shortBreak,
      backgroundAll: state.backgroundAll,
      Text: state.Text,
      changePlayPause,
      changeTime,
      changeTimesShortLongP,
      safeChangeTime
    }}>
      ({children})
    </TimeContext.Provider>
  )
}

export default TimeState