import { useEffect, useRef, useState } from "react"

const Test = () => {

    const audioRef = useRef(null)
  
    const [isPlaying, setIsPlaying] = useState(false)
  
    function setPlayingState(state) {
      setIsPlaying(state)
    }
  
    function toggleIsPlaying() {
      setIsPlaying(!isPlaying)
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
  
    return (
      <div>
        <div>
            {isPlaying ? (
                <button onClick={toggleIsPlaying}>Pause</button>
              ): (
                <button onClick={toggleIsPlaying}>Play</button>
              )
              }
  
              <button>Reload</button>
        </div>
        <audio 
            src='/alarm.mp3' 
            autoPlay={true} 
            ref={audioRef}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
        />
      </div>
    )
  }

export default Test