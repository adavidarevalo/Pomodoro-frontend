import Layout from "../components/Layout"
import Config from "../components/Config"
import TimerCount from "../components/TimerCount"
import Ball from "../components/Ball"
import styled from "@emotion/styled"

const CountContainer = styled.div`
position: relative;
height: auto;
width: 201px;
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 62vh;
`
const ContainerConfig = styled.div`
display: flex;
justify-content: center;
`

export default function Home() {

  return (
    <Layout>
    <Container>
      <CountContainer>
        <TimerCount/>
        <Ball/>
      </CountContainer>
    </Container>
      <ContainerConfig>
        <Config/>
      </ContainerConfig>
    </Layout>
  )
}
