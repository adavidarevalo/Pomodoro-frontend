import React, {useState, useContext} from "react"
import { AiFillCloseCircle } from "react-icons/ai";
import {ModalContainer, TitleFlex, Time, Font, Color, Apply} from "../styles/components/ModalConfig"
import TimeContext from "../context/time/timeContext"


const ModalConfig = ({handleClose}) => {
  const timeContext = useContext(TimeContext)
  const {
    shortBreak,
    pomodoro,
    longBreak,
    changeTimesShortLongP,
    backgroundAll,
    Text
  } = timeContext
  const [data, setData] = useState({
    pomodoro: pomodoro,
    longBreak: longBreak,
    shortBreak: shortBreak,
    backgroundAll: backgroundAll,
    Text: Text
  })
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }





  const handleSubmit = () =>{
    console.log(data)
    changeTimesShortLongP(data)
    handleClose()
  }



  return(
    <ModalContainer>
      <TitleFlex>
        <h2>Settings</h2>
        <AiFillCloseCircle
        onClick={handleClose}
        />
      </TitleFlex>
      <Time>
        <h2>Time (MINUTES)</h2>
        <form>
          <div>
            <label>pomodoro</label>
            <input 
            name="pomodoro"
            type="number" 
            min="0"
            placeholder={pomodoro}
            onChange={(e)=> handleChange(e)}
            />
          </div>
          <div>
            <label>short break</label>
            <input 
            name="shortBreak"
            type="number" 
            min="0"
            placeholder={shortBreak}
            onChange={(e)=> handleChange(e)}
            />
          </div>
          <div>
            <label>long break</label>
            <input 
            name="longBreak"
            type="number" 
            min="0"
            placeholder={longBreak}
            onChange={(e)=> handleChange(e)}
            />
          </div>
        </form>
      </Time>
      <Font>
        <h2>FONT</h2>
        <div>
          <button
          value="IBM Plex Mono"
          name="Text"
          onClick={(e)=>handleChange(e)}
          >
            Aa
          </button>
          <button
          value="Teko"
          name="Text"
          onClick={(e)=>handleChange(e)}
          >
            Aa
          </button>
          <button
          value="Roboto"
          name="Text"
          onClick={(e)=>handleChange(e)}
          >
            Aa
          </button>
        </div>
      </Font>
      <Color>
        <h2>COLOR</h2>
        <div>
          <button
          name="backgroundAll"
          value="#fa6e6c"
          onClick={(e)=> handleChange(e)}
          ></button>
          <button
          name="backgroundAll"
          value="#6ff3f8"
          onClick={(e)=> handleChange(e)}
          ></button>
          <button
          name="backgroundAll"
          value="#d981f9"
          onClick={(e)=> handleChange(e)}
          ></button>
        </div>
      </Color>
      <Apply>
        <button
        onClick={handleSubmit}
        >Apply</button>
      </Apply>
    </ModalContainer>
  )
}

export default ModalConfig