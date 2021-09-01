import styled from "@emotion/styled"

export const ModalContainer = styled.div`
background: white;
width: 100%;
max-width: 500px;
border-radius: 10px;
svg{
  width: 25px;
  height: 25px;
}
`
export const TitleFlex = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid gray;
padding-inline: 25px;
`
export const Time = styled.div`
padding-bottom: 15px;
border-bottom: 1px solid gray;
padding-inline: 20px;
form{
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
div{
  max-width: 100px;
  label{
    text-align: center;
  }
  input{
    max-width: 100px;
    height: 30px;
    font-size: 1.1rem;
    padding: 6px;
    border-radius: 5px;
    background: #eef1fa;
    border: none;
  }
}
}
`

export const Font = styled.div`
padding-bottom: 15px;
border-bottom: 1px solid gray;
padding-inline: 20px;
display: flex;
align-items: center;
justify-content: space-between;
div{
  display: flex;
  width: 120px;
  justify-content: inherit;
  button{
    border: 1px solid gray;
    background: none;
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  button:first-of-type{
    font-family: 'IBM Plex Mono', monospace;
  }
  button:nth-of-type(0n+2){
    font-family: 'Teko', sans-serif;
  }
  button:last-child{
    font-family: 'Roboto', sans-serif;
  }
}
`
export const Color = styled.div`
padding-bottom: 15px;
padding-inline: 20px;
display: flex;
align-items: center;
justify-content: space-between;
div{
  display: flex;
  width: 120px;
  justify-content: inherit;
  button{
    width: 25px;
    height: 25px;
    border-radius: 25px;
    border: none;
  }
  button:first-child{
    background: #fa6e6c;
  }
  button:nth-of-type(0n+2){
    background: #6ff3f8;
  }
  button:last-child{
    background: #d981f9;
  }
}
`
export const Apply = styled.div`
display: flex;
button{
  margin: 0 auto;
  background: #fa6e6c;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 8px 25px;
  letter-spacing: 2px;
  font-size: 1rem;
  position: relative;
  top: 15px;
}
`