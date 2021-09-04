import {
  CHANGE_PLAY_PAUSE,
  CHANGE_TIME,
  CHANGES_TIMES_L_S_P,
  SAFE_CHANGE_TIME,
  ADD_INFO_TIME,
  RETURN_INFORMATION
} from "../../type"

export default (state, action) => {
  switch (action.type) {
    case CHANGE_PLAY_PAUSE:
      return{
        ...state,
        playPause: action.payload
      }
    case CHANGE_TIME: 
      return{
        ...state,
        time: action.payload,
        timeStop: action.payload,
        playPause: true
      }
    case CHANGES_TIMES_L_S_P:
      return{
        ...state,
        pomodoro: action.payload.pomodoro,
        longBreak: action.payload.longBreak,
        shortBreak: action.payload.shortBreak,
        backgroundAll: action.payload.backgroundAll,
        Text: action.payload.Text,
      }
    case SAFE_CHANGE_TIME: 
      return{
        ...state,
        timeStop: action.payload
      }
    case ADD_INFO_TIME:
    console.log("awswer ",action.payload)
    return{
      ...state,
      pomodoro: action.payload.pomodoro,
      longBreak: action.payload.longBreak,
      shortBreak: action.payload.shortBreak,
      backgroundAll: action.payload.backgroundAll,
      Text: action.payload.Text
    }
    case RETURN_INFORMATION:
      return{
        ...state,
        pomodoro: 25,
        longBreak: 15,
        shortBreak: 5
      }
    default:
      return state;
  }
}